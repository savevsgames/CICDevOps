import { defineConfig } from "cypress";
// import the vite config file for cypress component tests
import viteConfig from "./vite.config";

export default defineConfig({
  component: {
    port: 5173,
    devServer: {
      framework: "react",
      bundler: "vite",
      viteConfig,
    },
  },

  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || "http://localhost:3001", // Fallback for local testing
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
