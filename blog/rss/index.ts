import * as RSS from "rss";

const feed = new RSS({
  title: "Thomas Broadley",
  feed_url: "https://thomasbroadley.com/blog/rss.xml",
  site_url: "https://thomasbroadley.com",
});

console.log(feed.xml({ indent: true }));
