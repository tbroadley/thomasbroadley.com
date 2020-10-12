import { mkdirSync, readFileSync, writeFileSync } from "fs";
import { render } from "./render";

const title = process.argv[2];
const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const date = new Date().toLocaleDateString();

try {
  mkdirSync(`blog/posts/${slug}`);
} catch {
  // directory already exists
}

const data = { title, date };
const template = readFileSync("templates/post.yml", "utf8");
const renderedTemplate = render(template, data);

writeFileSync(`blog/posts/${slug}/index.yml`, renderedTemplate);
