import { defineConfig } from "vite";

// Relative base so dist/ works from any folder, a static host, or an app wrapper.
export default defineConfig({
  base: "./",
  build: { chunkSizeWarningLimit: 1500 },
});
