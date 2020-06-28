import { readFileSync } from "fs";
import * as globby from "globby";
import { zipObject } from "lodash";
import { render as mustacheRender } from "mustache";
import { basename } from "path";

const partialFiles = globby.sync("templates/partials/*");
const partials = zipObject(
  partialFiles.map((partialFile) => basename(partialFile, ".mustache")),
  partialFiles.map((partialFile) => readFileSync(partialFile, "utf8"))
);

export function render(template, data) {
  return mustacheRender(template, data, partials);
}
