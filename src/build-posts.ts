import { readFileSync, writeFileSync } from "fs";
import * as globby from "globby";
import { render } from "mustache";
import * as YAML from "yaml";

const posts = globby
  .sync("blog/*.yml")
  .map((post) => post.replace(/^blog\//, ""));

const template = readFileSync("blog/template.html", "utf8");

for (const post of posts) {
  const dataYaml = readFileSync(`blog/${post}/index.yml`, "utf8");
  const data = YAML.parse(dataYaml);
  const renderedPost = render(template, data);

  const postFolder = post.replace(/\.yml$/, "");
  writeFileSync(`docs/blog/${postFolder}/index.html`, renderedPost);
}
