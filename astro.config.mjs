import { loadEnv } from 'vite';
const {
  PUBLIC_SANITY_PROJECT_ID,
  PUBLIC_SANITY_DATASET,
  PUBLIC_SANITY_VERSION_DATE,
} = loadEnv(import.meta.env.MODE, process.cwd(), '');
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      useCdn: false,
      apiVersion: PUBLIC_SANITY_VERSION_DATE,
      studioBasePath: '/admin',
    }),
    react(),
    tailwind(),
  ],
});
