import { readFileSync, writeFileSync } from "fs";

import { getPostAndTagData } from "./post-data";
import { render } from "./render";

export function buildBlogIndex() {
  const blogIndexData = {
    posts: getPostAndTagData()[0].filter(({ isDraft }) => !isDraft),
  };

  const template = readFileSync("templates/blog-index.html", "utf8");
  const renderedBlogIndex = render(template, blogIndexData);

  writeFileSync(`docs/blog/index.html`, renderedBlogIndex);
}
