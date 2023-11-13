import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemas } from "./schemas/schema";
import { codeInput } from "@sanity/code-input";

export default defineConfig({
  title: "blog",
  projectId: "22eiy0sq",
  dataset: "production",
  plugins: [codeInput(), deskTool()],
  schema: {
    types: schemas,
  },
});
