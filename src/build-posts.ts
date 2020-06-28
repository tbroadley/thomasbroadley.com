import { copyFileSync, readFileSync, writeFileSync } from "fs";
import * as globby from "globby";
import { render } from "mustache";
import { basename } from "path";
import * as YAML from "yaml";

const posts = globby
  .sync("blog/*/*.yml")
  .map((post) => post.replace(/^blog\//, ""))
  .map((post) => post.replace(/\/index\.yml$/, ""));

const template = readFileSync("templates/post.html", "utf8");

for (const post of posts) {
  const dataYaml = readFileSync(`blog/${post}/index.yml`, "utf8");
  const data = YAML.parse(dataYaml);
  const renderedPost = render(template, data);

  writeFileSync(`docs/blog/${post}/index.html`, renderedPost);

  const files = globby.sync(`blog/${post}/*`);

  for (const file of files) {
    if (file.endsWith("/index.yml")) continue;

    copyFileSync(file, `docs/blog/${post}/${basename(file)}`);
  }
}
