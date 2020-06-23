import { writeFileSync, readFileSync, readdirSync } from "fs";
import { Parser } from "htmlparser2";
import * as RSS from "rss";

const feed = new RSS({
  title: "Thomas Broadley",
  description: "Blog posts by Thomas Broadley.",
  feed_url: "https://thomasbroadley.com/blog/rss.xml",
  site_url: "https://thomasbroadley.com",
  image_url: "https://thomasbroadley.com/blog/rss.png",
});

const posts = readdirSync("..").filter(
  (post) => !["rss", "rss.png", "rss.xml", "index.html"].includes(post)
);

for (const post of posts) {
  const postBody = readFileSync(`../${post}/index.html`, "utf8");

  let title = undefined;
  let inTitle = false;

  let content = "TODO";

  const parser = new Parser(
    {
      onopentag(name, attributes) {
        if (name === "title") {
          inTitle = true;
        }
      },
      ontext(text) {
        if (inTitle) {
          title = text.replace(/—Thomas Broadley$/, "");
          inTitle = false;
        }
      },
    },
    { decodeEntities: true }
  );

  parser.write(postBody);
  parser.end();

  if (title && content) {
    feed.item({
      title,
      description: content,
      url: `https://thomasbroadley.com/blog/${post}/`,
      guid: post,
      date: new Date(), // TODO
    });
  }
}

const xml = feed.xml({ indent: true });
writeFileSync("../rss.xml", xml);
