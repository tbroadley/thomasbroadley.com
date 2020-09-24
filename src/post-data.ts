import { readFileSync } from "fs";
import * as YAML from "yaml";
import { orderBy, uniq, difference } from "lodash";
import * as globby from "globby";
import * as markdown from "remark-parse";
import * as remark2rehype from "remark-rehype";
import * as raw from "rehype-raw";
import * as html from "rehype-stringify";
import * as unified from "unified";

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
  blogchains: {
    name: string;
    nameHtml?: string;
    previousPost?: PostData;
    nextPost?: PostData;
  }[];
};

type Blogchain = {
  name: string;
};

type TagData = {
  tag: string;
  name: string;
  nameHtml?: string;
  posts: PostData[];
  postCount: number;
  postCountString: string;
};

const htmlFromMd = unified()
  .use(markdown)
  .use(remark2rehype, { allowDangerousHtml: true })
  .use(raw)
  .use(html);

function getTagDataFromPostData(postData: PostData[]): TagData[] {
  const dataYaml = readFileSync("blog/tags.yml", "utf8");
  const data = YAML.parse(dataYaml);
  const tags = Object.keys(data);

  const tagsInPosts = uniq(postData.flatMap((post) => post.tags));
  const tagsWithoutNames = difference(tagsInPosts, tags);

  if (tagsWithoutNames.length > 0) {
    throw new Error(
      `The following tags are used in posts but aren't declared in blog/tags.yml: ${tagsWithoutNames.join(
        ", "
      )}`
    );
  }

  const unorderedTags = tags.map((tag) => {
    const posts = orderBy(
      postData.filter(({ tags }) => tags.includes(tag)),
      [({ createdAt }) => createdAt],
      ["desc"]
    );

    return {
      tag,
      name: data[tag].name,
      nameHtml: data[tag].nameHtml,
      posts,
      postCount: posts.length,
      postCountString: `${posts.length} post${posts.length === 1 ? "" : "s"}`,
    };
  });

  return orderBy(unorderedTags, ({ tag }) => tag);
}

export function getPostAndTagData(): [PostData[], TagData[]] {
  const postsWithoutBlogchains = globby
    .sync("blog/posts/*/*.yml")
    .map((post: string) => {
      const path = post
        .replace(/^blog\/posts\//, "")
        .replace(/\/index\.yml$/, "");
      const dataYaml = readFileSync(post, "utf8");
      const data = YAML.parse(dataYaml);

      const tags = data.tags ?? [];
      const tagsString = tags
        .map((tag) => `<a href="../tags/${tag}">${tag}</a>`)
        .join(", ");

      const body = data.bodyMd
        ? htmlFromMd.processSync(data.bodyMd).contents
        : data.body;

      return { ...data, tags, tagsString, path, body };
    });

  const tags = getTagDataFromPostData(postsWithoutBlogchains);

  const posts = postsWithoutBlogchains.map((post) => {
    const tagsForPost = post.tags.map((tag) =>
      tags.find((it) => it.tag === tag)
    );

    const unorderedBlogchains = tagsForPost.map((tag) => {
      const postIndex = tag.posts.indexOf(post);

      // Remember that posts are in reverse chronological order
      const previousPost =
        postIndex === tag.posts.length - 1
          ? undefined
          : tag.posts[postIndex + 1];
      const nextPost = postIndex === 0 ? undefined : tag.posts[postIndex - 1];

      return {
        tag: tag.tag,
        name: tag.name,
        nameHtml: tag.nameHtml,
        previousPost,
        nextPost,
      };
    });

    const blogchains = orderBy(unorderedBlogchains, ({ tag }) => tag);

    return { ...post, blogchains };
  });

  const orderedPosts = orderBy(posts, [({ createdAt }) => createdAt], ["desc"]);
  return [orderedPosts, tags];
}
