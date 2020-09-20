import { readFileSync } from "fs";
import * as YAML from "yaml";
import { orderBy, uniq } from "lodash";
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

type Blogchain = {
  name: string;
};

type TagData = {
  name: string;
  posts: PostData[];
  postCount: number;
  postCountString: string;
  blogchain?: Blogchain;
};

export function getPostData(): PostData[] {
  const posts = globby.sync("blog/posts/*/*.yml").map((post: string) => {
    const path = post
      .replace(/^blog\/posts\//, "")
      .replace(/\/index\.yml$/, "");
    const dataYaml = readFileSync(post, "utf8");
    const data = YAML.parse(dataYaml);

    const tags = data.tags ?? [];
    const tagsString = tags
      .map((tag) => `<a href="../tags/${tag}">${tag}</a>`)
      .join(", ");

    return { ...data, tags, tagsString, path };
  });
  return orderBy(posts, [({ createdAt }) => createdAt], ["desc"]);
}

export function getTagData(): TagData[] {
  const postData = getPostData();
  const tags = uniq(postData.flatMap((post) => post.tags));

  const blogchains: { [tag: string]: Blogchain } = Object.fromEntries(
    globby.sync("blog/tags/*.yml").map((post: string) => {
      const tag = post.replace(/^blog\/tags\//, "").replace(/\.yml$/, "");
      const dataYaml = readFileSync(post, "utf8");
      const data = YAML.parse(dataYaml);
      return [tag, data.blogchain];
    })
  );

  const unorderedTags = tags.map((tag) => {
    const posts = orderBy(
      postData.filter(({ tags }) => tags.includes(tag)),
      [({ createdAt }) => createdAt],
      ["desc"]
    );

    return {
      name: tag,
      posts,
      postCount: posts.length,
      postCountString: `${posts.length} post${posts.length === 1 ? "" : "s"}`,
      blogchain: blogchains[tag],
    };
  });

  return orderBy(unorderedTags, ({ name }) => name);
}
