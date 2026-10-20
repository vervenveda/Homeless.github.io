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
requireText(!/(higher_learming|Career_star_index|financial_budget_calculator_index|artist1970\.github\.io\/noema-ai)/.test(html), "a legacy broken route remains");

const ids = [...html.matchAll(/\bid=["']([^"']+)["']/gi)].map((match) => match[1]);
const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
requireText(!duplicateIds.length, "duplicate IDs: " + duplicateIds.join(", "));

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
