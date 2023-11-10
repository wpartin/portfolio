// We import object and document schemas
import blockContent from "./blockContent";
import post from "./post";
import author from "./author";
import project from "./project";

// Then we give our schema to the builder and provide the result to Sanity
export default [post, author, project, blockContent];
