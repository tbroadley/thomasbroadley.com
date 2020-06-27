import { writeFileSync, readFileSync, readdirSync } from "fs";
import { Parser } from "htmlparser2";
import * as RSS from "rss";

const WEBSITE_URL = "https://thomasbroadley.com";
const BLOG_URL = `${WEBSITE_URL}/blog`;

const SELF_CLOSING_TAG_NAMES = ["hr", "img"];

function parsePost(postBody) {
  let title = undefined;
  let inTitle = false;

  let timestamp = undefined;
  let inTimestamp = false;

  let content = "";
  let inContent = false;

  function onopentag(name, attributes) {
    if (name === "title") {
      inTitle = true;
    }
    if (name === "p" && attributes.class === "timestamp") {
      inTimestamp = true;
    }
    if (name === "section") {
      inContent = true;
    } else if (inContent) {
      const attributesString =
        Object.keys(attributes).length === 0
          ? ""
          : " " +
            Object.keys(attributes)
              .map((key) => `${key}="${attributes[key]}"`)
              .join(" ");
      const closingBracket = SELF_CLOSING_TAG_NAMES.includes(name)
        ? " />"
        : ">";
      content += `<${name}${attributesString}${closingBracket}`;
    }
  }

  function ontext(text) {
    if (inTitle) {
      title = text.replace(/—Thomas Broadley$/, "");
    }
    if (inTimestamp) {
      timestamp = text.substring(0, "yyyy-mm-dd".length);
    }
    if (inContent) {
      content += text;
    }
  }

  function onclosetag(name) {
    if (name === "title") {
      inTitle = false;
    }
    if (name === "p") {
      inTimestamp = false;
    }
    if (name === "section") {
      inContent = false;
    }
    if (inContent) {
      if (!SELF_CLOSING_TAG_NAMES.includes(name)) {
        content += `</${name}>`;
      }
    }
  }

  const parser = new Parser(
    {
      onopentag,
      ontext,
      onclosetag,
    },
    { decodeEntities: true }
  );

  parser.write(postBody);
  parser.end();

  return { title, timestamp, content };
}

const feed = new RSS({
  title: "Thomas Broadley",
  managingEditor: "Thomas Broadley",
  webMaster: "Thomas Broadley",
  copyright: "2020 Thomas Broadley",
  language: "en",
  description: "Blog posts by Thomas Broadley.",
  feed_url: `${BLOG_URL}/rss.xml`,
  site_url: WEBSITE_URL,
  image_url: `${BLOG_URL}/rss.png`,
});

const posts = readdirSync("..").filter(
  (post) => !["rss", "rss.png", "rss.xml", "index.html"].includes(post)
);

for (const post of posts) {
  const postBody = readFileSync(`../${post}/index.html`, "utf8");
  const { title, timestamp, content } = parsePost(postBody);

  if (title && timestamp && content) {
    feed.item({
      title,
      description: content,
      url: `${BLOG_URL}/${post}/`,
      guid: post,
      date: new Date(`${timestamp} 00:00-0500`),
    });
  } else {
    throw new Error(`Couldn't parse post ${post}`);
  }
}

const xml = feed.xml({ indent: true });
writeFileSync("../rss.xml", xml);
