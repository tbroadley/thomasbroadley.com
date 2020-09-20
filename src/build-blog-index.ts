import { readFileSync, writeFileSync } from "fs";

import { getPostData } from "./post-data";
import { render } from "./render";

export function buildBlogIndex() {
  const blogIndexData = { posts: getPostData() };

  const template = readFileSync("templates/blog-index.html", "utf8");
  const renderedBlogIndex = render(template, blogIndexData);

  writeFileSync(`docs/blog/index.html`, renderedBlogIndex);
}
