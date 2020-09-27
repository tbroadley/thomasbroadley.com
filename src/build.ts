import { buildBlogIndex } from "./build-blog-index";
import { buildBasicPages } from "./build-basic-pages";
import { buildPosts } from "./build-posts";
import { buildRss } from "./build-rss";
import { buildTagIndices } from "./build-tag-indices";

buildBasicPages();
buildPosts();
buildBlogIndex();
buildTagIndices();
buildRss();
console.log("Done");
