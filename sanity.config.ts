'use client'

import { visionTool } from "@sanity/vision"
import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"

import { dataset, projectId } from "./src/sanity/env"
import { schemaTypes } from "./src/sanity/schemaTypes"
import { structure } from "./src/sanity/structure"

export default defineConfig({
  name: "default",
  title: "Buzzin Studio",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [structureTool({ structure }), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
