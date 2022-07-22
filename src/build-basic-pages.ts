import { readFileSync, writeFileSync } from "fs";

import { render } from "./render";

export function buildBasicPages() {
  buildPage("templates/index.html", "docs/index.html");
  buildPage("templates/404.html", "docs/404.html");
  buildPage("templates/search.html", "docs/search/index.html");
}

function buildPage(inputPath: string, outputPath: string) {
  const template = readFileSync(inputPath, "utf8");
  const rendered = render(template, {});

  writeFileSync(outputPath, rendered);
}
