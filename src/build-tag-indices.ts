import { getTagData } from "./post-data";

export function buildTagIndices() {
  console.log(require("util").inspect(getTagData(), { depth: null }));
}
