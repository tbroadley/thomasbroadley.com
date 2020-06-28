import { copyFileSync, readFileSync, writeFileSync } from "fs";
import * as globby from "globby";
import { render } from "mustache";
import { orderBy } from "lodash";
import { basename } from "path";
import * as YAML from "yaml";

const unorderedPosts = globby.sync("blog/*/*.yml").map((post) => {
  const path = post.replace(/^blog\//, "").replace(/\/index\.yml$/, "");
  const dataYaml = readFileSync(post, "utf8");
  const data = YAML.parse(dataYaml);
  return { ...data, path };
});
const posts = orderBy(unorderedPosts, [({ createdAt }) => createdAt], ["desc"]);
const blogIndexData = { posts };

const template = readFileSync("templates/blog-index.html", "utf8");
const renderedBlogIndex = render(template, blogIndexData);

writeFileSync(`docs/blog/index.html`, renderedBlogIndex);
