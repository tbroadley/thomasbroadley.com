import { readFileSync } from "fs";
import * as YAML from "yaml";
import { orderBy } from "lodash";
import * as globby from "globby";

export function getPostData() {
  const posts = globby.sync("blog/posts/*/*.yml").map((post) => {
    const path = post
      .replace(/^blog\/posts\//, "")
      .replace(/\/index\.yml$/, "");
    const dataYaml = readFileSync(post, "utf8");
    const data = YAML.parse(dataYaml);
    return { ...data, path };
  });
  return orderBy(posts, [({ createdAt }) => createdAt], ["desc"]);
}
