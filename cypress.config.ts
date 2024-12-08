import { defineConfig } from "cypress";
import viteConfig from "./vite.config"; // Import Vite config for Cypress component testing

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
      viteConfig,
    },
    port: 5173,
    setupNodeEvents(on, config) {
      // Cleanup after each test
      on("after:spec", () => {
        import("@testing-library/react").then(({ cleanup }) => cleanup());
      });
    },
  },
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || "http://localhost:3001",
    reporter: "json", // Save e2e test results as JSON
    reporterOptions: {
      output: "cypress/reports/e2e-results.json",
    },
    setupNodeEvents(on, config) {
      // Add e2e-specific event listeners here
    },
  },
});
