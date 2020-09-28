import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import * as globby from "globby";
import { basename } from "path";

import { getPostAndTagData } from "./post-data";
import { render } from "./render";

export function buildPosts() {
  const [posts] = getPostAndTagData();
  const template = readFileSync("templates/post.html", "utf8");

  for (const { path, ...data } of posts) {
    const renderedPost = render(template, data);

    const folderPath = `docs/blog/${path}`;
    try {
      mkdirSync(folderPath);
    } catch (e) {
      // Ignore: folder already exists
    }

    writeFileSync(`${folderPath}/index.html`, renderedPost);

    const files = globby.sync(`blog/posts/${path}/*`);

    for (const file of files) {
      if (file.endsWith("/index.yml")) continue;

      copyFileSync(file, `${folderPath}/${basename(file)}`);
    }
  }
}
