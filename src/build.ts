import { buildBlogIndex } from "./build-blog-index";
import { buildIndex } from "./build-index";
import { buildPosts } from "./build-posts";
import { buildRss } from "./build-rss";

buildIndex();
buildPosts();
buildBlogIndex();
buildRss();
