const fs = require("fs");
const path = require("path");

const requiredFiles = [
  "index.html",
  "styles.css",
  "soccer-logo.png",
  "soccer-mock-up.png",
  "we-are-soccer-brand-card.png",
];

for (const file of requiredFiles) {
  const fullPath = path.join(__dirname, "..", file);
  if (!fs.existsSync(fullPath)) {
    console.error(`Missing required file: ${file}`);
    process.exit(1);
  }
}

const html = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");
const css = fs.readFileSync(path.join(__dirname, "..", "styles.css"), "utf8");

const checks = [
  [html.includes("<h1"), "index.html must include one h1"],
  [(html.match(/<h1/g) || []).length === 1, "index.html must include exactly one h1"],
  [html.includes("name=\"description\""), "index.html must include a meta description"],
  [html.includes("application/ld+json"), "index.html must include structured data"],
  [css.includes("@media"), "styles.css must include responsive rules"],
];

for (const [passes, message] of checks) {
  if (!passes) {
    console.error(message);
    process.exit(1);
  }
}

console.log("Static site build check passed.");
