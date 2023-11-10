import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { codeInput } from "@sanity/code-input";
import schemas from "./schemas/schema";

export default defineConfig({
  title: "blog",
  projectId: "22eiy0sq",
  dataset: "production",
  plugins: [codeInput(), deskTool()],
  schema: {
    types: schemas,
  },
});
