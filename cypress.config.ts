import { defineConfig } from "cypress";
import viteConfig from "./vite.config"; // Import Vite configuration for Cypress component testing

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
      viteConfig,
    },
    port: 5173, // Match the port specified in the GitHub workflow
    setupNodeEvents(on, config) {
      // Configure any additional event listeners needed for component tests
      on("after:spec", () => {
        import("@testing-library/react").then(({ cleanup }) => cleanup());
      });
    },
  },
  e2e: {
    baseUrl: process.env.BASE_URL || "http://localhost:3001", // Use environment variable for flexibility
    reporter: "json", // Output results in JSON format for processing in the GitHub workflow
    reporterOptions: {
      output: "cypress/reports/e2e-results.json", // Define the output location for e2e test logs
    },
    setupNodeEvents(on, config) {
      // Add any e2e-specific event listeners here
    },
  },
});
