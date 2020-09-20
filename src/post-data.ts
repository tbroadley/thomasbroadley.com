import { readFileSync } from "fs";
import * as YAML from "yaml";
import { orderBy } from "lodash";
import * as globby from "globby";

type PostData = {
  path: string;
  title: string;
  titleHtml?: string;
  description: string;
  descriptionHtml?: string;
  tags: string[];
  tagsString: string;
  body: string;
  createdAt: string;
  lastModified: string;
};

export function getPostData(): PostData[] {
  const posts = globby.sync("blog/posts/*/*.yml").map((post) => {
    const path = post
      .replace(/^blog\/posts\//, "")
      .replace(/\/index\.yml$/, "");
    const dataYaml = readFileSync(post, "utf8");
    const data = YAML.parse(dataYaml);

    const tags = data.tags ?? [];
    const tagsString = tags.join(", ");

    return { ...data, tags, tagsString, path };
  });
  return orderBy(posts, [({ createdAt }) => createdAt], ["desc"]);
}
