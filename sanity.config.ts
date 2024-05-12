import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'cahyadi-portfolio',
  title: 'Cahyadi Portfolio',
  projectId: String(process.env.PUBLIC_SANITY_PROJECT_ID),
  dataset: String(process.env.PUBLIC_SANITY_DATASET),
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
