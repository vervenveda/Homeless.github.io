#!/usr/bin/env node
/**
 * Homeless Hub contract audit.
 *
 * Run locally from the repository root:
 *   node scripts/audit-links.mjs
 *   node scripts/audit-links.mjs --online
 *
 * The default mode is deterministic and checks the single-file portal's
 * accessibility contract, stale routes, duplicate IDs, and JavaScript syntax.
 * --online additionally follows every literal HTTP(S) URL found in index.html.
 */
import { readFile } from "node:fs/promises";
import vm from "node:vm";

const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
const languageAsset = await readFile(new URL("../assets/vnv-language.js", import.meta.url), "utf8");
const failures = [];
const requireText = (condition, message) => {
  if (!condition) failures.push(message);
};

requireText(/<html\b[^>]*\blang=["']en["']/i.test(html), "html[lang=en] is missing");
requireText(/class=["'][^"']*skip-link/.test(html), "skip link is missing");
requireText(/<main\b/i.test(html), "main landmark is missing");
requireText(/<nav\b/i.test(html), "navigation landmark is missing");
requireText(/role=["']group["'][^>]*aria-labelledby=["']urgencyLabel["']/i.test(html), "Urgency group semantics are missing");
requireText(/role=["']group["'][^>]*aria-labelledby=["']needsLabel["']/i.test(html), "Needs group semantics are missing");
requireText(/id=["']urgencyLabel["'][^>]*>Urgency</i.test(html), "Urgency group label is missing");
requireText(/id=["']needsLabel["'][^>]*>Needs</i.test(html), "Needs group label is missing");
requireText(/id=["']styleChoices["'][^>]*>/.test(html), "response style choices are missing");
requireText(/data-style=["']direct["']/.test(html) && /data-style=["']encouraging["']/.test(html) && /data-style=["']steps["']/.test(html), "response style options are incomplete");
requireText(/id=["']constraintChoices["'][^>]*>/.test(html), "practical constraint choices are missing");
requireText(/data-constraint=["']limited-travel["']/.test(html) && /data-constraint=["']safe-contact["']/.test(html) && /data-constraint=["']what-to-say["']/.test(html), "practical constraint options are incomplete");
requireText(/function guideCallScript\(/.test(html) && /function guideVerificationText\(/.test(html), "personalized guide helpers are missing");
requireText(/oneDoorGuideV2/.test(html), "versioned personalized guide state is missing");
requireText(/Accessible reading scale: \+3px text and medium weights across the page/.test(html), "readable typography scale marker is missing");
requireText(!/font-weight:(?:850|800|750|700|650|600)\b/.test(html), "heavy typography weight remains");
requireText(/id=["']guideResults["'][^>]*aria-live=["']polite["']/i.test(html), "guide result live region is missing");
requireText(/id=["']letterOutput["'][^>]*aria-live=["']polite["']/i.test(html), "letter output live region is missing");
requireText(!/(higher_learming|Career_star_index|financial_budget_calculator_index|artist1970\.github\.io\/noema-ai)/.test(html), "a legacy broken route remains");
requireText(/<script\s+src=["']assets\/vnv-language\.js["']\s+defer><\/script>/i.test(html), "local language interface script is missing");
requireText(/id=["']worldwide["']/.test(html) && /href=["']#worldwide["']/.test(html), "worldwide directory landmark or navigation link is missing");
requireText((html.match(/class=["']worldwide-card["']/g) ?? []).length >= 9, "worldwide directory cards are incomplete");
requireText(/data-i18n-no-online/.test(html), "dynamic location privacy boundary is missing");
requireText(/function validCoordinates\(/.test(html), "geolocation coordinate validation is missing");
requireText(/Content-Security-Policy["'][^>]*connect-src[^"']*api\.mymemory\.translated\.net/i.test(html), "translation endpoint CSP contract is missing");
requireText(/vnv_language_v1/.test(html) && /vnv_translated_phrases_v2/.test(html), "Quick Exit language cleanup keys are missing");
requireText(/const CODES=\["en","es","fr","ar","zh","de","ru","pt","hi","ja","ko","it","bn"\]/.test(languageAsset), "13-language asset contract is incomplete");
requireText(/document\.documentElement\.dir/.test(languageAsset), "language direction support is missing");
requireText(/vnv_public_translation_consent_v1/.test(languageAsset), "explicit translation-consent contract is missing");

const ids = [...html.matchAll(/\bid=["']([^"']+)["']/gi)].map((match) => match[1]);
const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
requireText(!duplicateIds.length, "duplicate IDs: " + duplicateIds.join(", "));

const blankAnchors = [...html.matchAll(/<a\b[^>]*target=["']_blank["'][^>]*>/gi)].map((match) => match[0]);
requireText(blankAnchors.every((anchor) => /rel=["'][^"']*noopener/i.test(anchor)), "a target=_blank link is missing rel=noopener");

try {
  new vm.Script(languageAsset, { filename: "assets/vnv-language.js" });
} catch (error) {
  failures.push("language asset: " + error.message);
}

const scripts = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)]
  .map((match) => match[1])
  .filter((script) => script.trim());
for (const [index, script] of scripts.entries()) {
  try {
    new vm.Script(script, { filename: "index.html inline script " + (index + 1) });
  } catch (error) {
    failures.push("inline script " + (index + 1) + ": " + error.message);
  }
}

const urls = [...new Set(
  (html.match(/https?:\/\/[^"'\s<>]+/g) ?? [])
    .map((url) => url.replace(/[),.;]+$/, ""))
    .filter((url) => !url.includes("\${"))
)];

if (process.argv.includes("--online")) {
  for (const url of urls) {
    try {
      const response = await Promise.race([
        fetch(url, { redirect: "follow" }),
        new Promise((_, reject) => setTimeout(() => reject(new Error("timeout")), 15000))
      ]);
      if (!response.ok) failures.push("HTTP " + response.status + ": " + url);
    } catch (error) {
      failures.push(url + ": " + error.message);
    }
  }
}

const mode = process.argv.includes("--online") ? "online" : "static";
if (failures.length) {
  console.error("Homeless hub audit FAIL (" + mode + ")");
  for (const failure of failures) console.error("- " + failure);
  process.exitCode = 1;
} else {
  console.log("Homeless hub audit PASS (" + mode + "); " + urls.length + " literal URLs discovered; " + scripts.length + " inline script checked.");
}
