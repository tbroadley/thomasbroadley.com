import { readFileSync, writeFileSync } from "fs";

import { render } from "./render";

export function buildBasicPages() {
  const template = readFileSync("templates/index.html", "utf8");
  const renderedIndex = render(template, {});

  writeFileSync(`docs/index.html`, renderedIndex);

  const template404 = readFileSync("templates/404.html", "utf8");
  const rendered404 = render(template404, {});

  writeFileSync(`docs/404.html`, rendered404);
}
