import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";
import { visionTool } from "@sanity/vision";

const config = defineConfig({
	projectId: "021zxht7",
	dataset: "production",
	title: "Prajas Kadepurkar | UX Portfolio",
	apiVersion: "2025-05-15",
	plugins: [structureTool(), visionTool()],
	basePath: "/admin",
	schema: { types: schemas },
});

export default config;
