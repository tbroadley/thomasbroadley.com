import { readFileSync, writeFileSync } from "fs";

import { getTagData } from "./post-data";
import { render } from "./render";

export function buildTagIndices() {
  const tagData = getTagData();

  const template = readFileSync("templates/tag-post-list.html", "utf8");

  for (const tag of tagData) {
    const renderedTagPostList = render(template, tag);
    writeFileSync(`docs/blog/tags/${tag.name}.html`, renderedTagPostList);
  }
}
