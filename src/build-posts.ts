import { copyFileSync, readFileSync, writeFileSync } from "fs";
import * as globby from "globby";
import { render } from "mustache";
import { basename } from "path";

import { getPostData } from "./post-data";

const posts = getPostData();
const template = readFileSync("templates/post.html", "utf8");

for (const { path, ...data } of posts) {
  const renderedPost = render(template, data);

  writeFileSync(`docs/blog/${path}/index.html`, renderedPost);

  const files = globby.sync(`blog/${path}/*`);

  for (const file of files) {
    if (file.endsWith("/index.yml")) continue;

    copyFileSync(file, `docs/blog/${path}/${basename(file)}`);
  }
}
