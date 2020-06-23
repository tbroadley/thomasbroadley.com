import { writeFileSync, readFileSync, readdirSync } from "fs";
import { Parser } from "htmlparser2";
import * as RSS from "rss";

const feed = new RSS({
  title: "Thomas Broadley",
  feed_url: "https://thomasbroadley.com/blog/rss.xml",
  site_url: "https://thomasbroadley.com",
});

const posts = readdirSync("..").filter(
  (post) => !["rss", "rss.xml", "index.html"].includes(post)
);

const postInformation = posts.map((post) => {
  const postBody = readFileSync(`../${post}/index.html`, "utf8");
  const parser = new Parser(
    {
      onopentag(name, attributes) {
        console.log(name, attributes);
      },
    },
    { decodeEntities: true }
  );
  parser.write(postBody);
});

const xml = feed.xml({ indent: true });
writeFileSync("../rss.xml", xml);
