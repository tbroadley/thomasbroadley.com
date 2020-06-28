import { readFileSync, writeFileSync } from "fs";
import { render } from "mustache";

import { getPostData } from "./post-data";

const blogIndexData = { posts: getPostData() };

const template = readFileSync("templates/blog-index.html", "utf8");
const renderedBlogIndex = render(template, blogIndexData);

writeFileSync(`docs/blog/index.html`, renderedBlogIndex);
