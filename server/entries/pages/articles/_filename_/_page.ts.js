import { marked } from "marked";
import { m as moduleName } from "../../../../chunks/articles.store.js";
const load = async ({ fetch, params }) => {
  try {
    const { filename } = params;
    const res = await fetch(`/${moduleName}/${filename}.md`);
    const content = await res.text();
    return {
      filename,
      content: marked.parse(content)
    };
  } catch (error) {
    return {
      filename: "",
      content: ""
    };
  }
};
export {
  load
};
