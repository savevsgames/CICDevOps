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
    reporter: "json", // JSON reporter
    reporterOptions: {
      output: "cypress/reports/component-results.json", // Path for saving test results
    },
    setupNodeEvents(on, config) {
      // Add component test-specific event listeners here
    },
  },

  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || "http://localhost:3001", // Default to local server
    reporter: "json", // JSON reporter for e2e
    reporterOptions: {
      output: "cypress/reports/e2e-results.json", // Path for saving test results
    },
    setupNodeEvents(on, config) {
      // Add e2e test-specific event listeners here
    },
  },
});
