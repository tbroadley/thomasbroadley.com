import { readFileSync, writeFileSync } from "fs";

import { render } from "./render";

const template = readFileSync("templates/index.html", "utf8");
const renderedIndex = render(template, {});

writeFileSync(`docs/index.html`, renderedIndex);
