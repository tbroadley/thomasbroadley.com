import { writeFileSync } from "fs";
import { take } from "lodash";
import * as RSS from "rss";

import { getPostAndTagData } from "./post-data";

const WEBSITE_URL = "https://thomasbroadley.com";
const BLOG_URL = `${WEBSITE_URL}/blog`;

const BLOG_PATH = "docs/blog";

export function buildRss(fileName: string, limit?: number) {
  const feed = new RSS({
    title: "Thomas Broadley",
    managingEditor: "Thomas Broadley",
    webMaster: "Thomas Broadley",
    copyright: `${new Date().getFullYear()} Thomas Broadley`,
    language: "en",
    description: "Blog posts by Thomas Broadley.",
    feed_url: `${BLOG_URL}/${fileName}`,
    site_url: WEBSITE_URL,
    image_url: `${BLOG_URL}/rss.png`,
  });

  const posts = getPostAndTagData()[0].filter(({ isDraft }) => !isDraft);
  const limitedPosts = limit ? take(posts, limit) : posts;

  for (const { path, title, createdAt, body } of limitedPosts) {
    feed.item({
      title,
      description: body,
      url: `${BLOG_URL}/${path}/`,
      guid: path,
      date: new Date(`${createdAt} 00:00-0500`),
    });
  }

  const xml = feed.xml({ indent: true });
  writeFileSync(`${BLOG_PATH}/${fileName}`, xml);
}
