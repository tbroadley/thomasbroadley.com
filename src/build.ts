import { buildBlogIndex } from "./build-blog-index";
import { buildIndex } from "./build-index";
import { buildPosts } from "./build-posts";
import { buildRss } from "./build-rss";
import { buildTagIndices } from "./build-tag-indices";

buildIndex();
buildPosts();
buildBlogIndex();
buildTagIndices();
buildRss();
console.log("Done");
