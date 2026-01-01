import { readFileSync } from "fs";
import * as YAML from "yaml";
import { orderBy, uniq, difference } from "lodash";
import * as globby from "globby";
import * as markdown from "remark-parse";
import * as remark2rehype from "remark-rehype";
import * as raw from "rehype-raw";
import * as html from "rehype-stringify";
import * as unified from "unified";
import * as t from "io-ts";
import { PathReporter } from "io-ts/PathReporter";
import { isLeft } from "fp-ts/lib/These";

const PostRequired = t.type({
  title: t.string,
  description: t.string,
  createdAt: t.string,
});
const PostOptional = t.partial({
  titleHtml: t.string,
  descriptionHtml: t.string,
  headerImage: t.string,
  headerImageAltText: t.string,
  headerImageCaption: t.string,
  body: t.string,
  bodyMd: t.string,
  tags: t.array(t.string),
  lastModified: t.string,
  isDraft: t.boolean,
});
const Post = t.intersection([PostRequired, PostOptional]);

type Post = t.TypeOf<typeof Post>;
type PostPageData = Post & {
  path: string;
  tags: string[];
  tagsString: string;
  blogchains: {
    name: string;
    nameHtml?: string;
    previousPost?: Post;
    nextPost?: Post;
  }[];
  headerImageOg?: string;
  headerImageThumbnail?: string;
  hasMarkdownVersion: boolean;
};

const TagRequired = t.type({
  name: t.string,
});
const TagOptional = t.partial({
  nameHtml: t.string,
});
const Tag = t.intersection([TagRequired, TagOptional]);

type Tag = t.TypeOf<typeof Tag>;
type TagPostListData = Tag & {
  tag: string;
  postsAndDrafts: Post[];
  posts: Post[];
  postCount: number;
  postCountString: string;
};

const TagFile = t.record(t.string, Tag);
type TagFile = t.TypeOf<typeof TagFile>;

const htmlFromMd = unified()
  .use(markdown)
  .use(remark2rehype, { allowDangerousHtml: true })
  .use(raw)
  .use(html);

function checkForUndeclaredTags(tags: string[], postData: Post[]) {
  const tagsInPosts = uniq(postData.flatMap((post) => post.tags));
  const tagsWithoutNames = difference(tagsInPosts, tags);

  if (tagsWithoutNames.length > 0) {
    throw new Error(
      `The following tags are used in posts but aren't declared in blog/tags.yml: ${tagsWithoutNames.join(
        ", "
      )}`
    );
  }
}

function getTagPostListData(tag: string, tagData: Tag, postData: Post[]) {
  const postsAndDrafts = orderBy(
    postData.filter(({ tags }) => tags.includes(tag)),
    [({ createdAt }) => createdAt],
    ["desc"]
  );

  const posts = postsAndDrafts.filter(({ isDraft }) => !isDraft);

  return {
    tag,
    name: tagData.name,
    nameHtml: tagData.nameHtml,
    postsAndDrafts,
    posts,
    postCount: posts.length,
    postCountString: `${posts.length} post${posts.length === 1 ? "" : "s"}`,
  };
}

function getTagDataFromPostData(postData: Post[]): TagPostListData[] {
  const dataYaml = readFileSync("blog/tags.yml", "utf8");
  const uncheckedData = YAML.parse(dataYaml);

  const result = TagFile.decode(uncheckedData);
  if (isLeft(result)) {
    throw new Error(
      `Error(s) while decoding blog/tags.yml: ${PathReporter.report(
        result
      ).join(", ")}`
    );
  }

  const data = result.right;
  const tags = Object.keys(data);

  checkForUndeclaredTags(tags, postData);

  const unorderedTags = tags.map((tag) =>
    getTagPostListData(tag, data[tag], postData)
  );
  return orderBy(unorderedTags, ({ tag }) => tag);
}

function getPostPageData(post: string) {
  const path = post.replace(/^blog\/posts\//, "").replace(/\/index\.yml$/, "");
  const dataYaml = readFileSync(post, "utf8");
  const uncheckedData = YAML.parse(dataYaml);

  const result = Post.decode(uncheckedData);
  if (isLeft(result)) {
    throw new Error(
      `Error(s) while decoding ${post}: ${PathReporter.report(result).join(
        ", "
      )}`
    );
  }

  const data = result.right;
  const tags = data.tags ?? [];
  const tagsString = tags
    .map((tag) => `<a href="../tags/${tag}">${tag}</a>`)
    .join(", ");

  const body = data.bodyMd
    ? (htmlFromMd.processSync(data.bodyMd).contents as string)
    : data.body;

  const headerImageOg = data.headerImage?.replace(".jpg", ".og.jpg");
  const headerImageThumbnail = data.headerImage?.replace(
    ".jpg",
    ".thumbnail.jpg"
  );

  return {
    ...data,
    tags,
    tagsString,
    path,
    body,
    headerImageOg,
    headerImageThumbnail,
    hasMarkdownVersion: !!data.bodyMd,
  };
}

function getBlogchain(tag: TagPostListData, post: Post) {
  const postsToUse = post.isDraft ? tag.postsAndDrafts : tag.posts;
  const postIndex = postsToUse.indexOf(post);

  // Remember that posts are in reverse chronological order
  const previousPost =
    postIndex === postsToUse.length - 1 ? undefined : postsToUse[postIndex + 1];
  const nextPost = postIndex === 0 ? undefined : postsToUse[postIndex - 1];

  return {
    tag: tag.tag,
    name: tag.name,
    nameHtml: tag.nameHtml,
    previousPost,
    nextPost,
  };
}

export function getPostAndTagData(): [PostPageData[], TagPostListData[]] {
  const postsWithoutBlogchains = globby
    .sync("blog/posts/*/*.yml")
    .map(getPostPageData);

  const tags = getTagDataFromPostData(postsWithoutBlogchains);

  const posts = postsWithoutBlogchains.map((post) => {
    const tagsForPost = post.tags.map((tag) =>
      tags.find((it) => it.tag === tag)
    );

    const unorderedBlogchains = tagsForPost.map((tag) =>
      getBlogchain(tag, post)
    );
    const blogchains = orderBy(unorderedBlogchains, ({ tag }) => tag);

    return { ...post, blogchains };
  });

  const orderedPosts = orderBy(posts, [({ createdAt }) => createdAt], ["desc"]);
  return [orderedPosts, tags];
}
