import { marked } from "marked";
const load = async ({ fetch, params }) => {
  try {
    const res = await fetch("/resume.md");
    const content = await res.text();
    return {
      content: marked.parse(content)
    };
  } catch (error) {
    return {
      content: ""
    };
  }
};
export {
  load
};
