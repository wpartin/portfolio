import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./schemas/schema";
import deskStructure from "./deskStructure";

export default defineConfig({
    title: "blog",
    projectId: "22eiy0sq",
    dataset: "production",
    plugins: [deskTool({
        structure: deskStructure
    })],
    schema: {
        types: schemas,
    },
});