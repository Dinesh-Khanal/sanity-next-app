import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schema";

const config = defineConfig({
  projectId: "217y890j",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2023-11-10",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
