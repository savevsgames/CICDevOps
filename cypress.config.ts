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
    retries: {
      runMode: 2, // Retry failed tests up to 2 times
      openMode: 0, // No retries when running in interactive mode
    },
    requestTimeout: 5000, // For API calls
    responseTimeout: 10000, // For server responses
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
