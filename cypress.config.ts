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
      on("after:spec", (spec, results) => {
        console.log(`Component Spec finished: ${spec.relative}`);
        if (results && results.stats.failures) {
          console.log(
            `Failures detected in ${spec.relative}: ${results.stats.failures}`
          );
        }
      });
      return config; // Return the updated config
    },
  },
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || "https://cicdevops.onrender.com",
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports", // Ensure consistent report directory
      reportFilename: "results-e2e-[nodeVersion]", // Placeholder for dynamic naming
      overwrite: true, // Overwrite existing reports
      html: false, // Disable HTML reports
      json: true, // Generate JSON reports
    },
    setupNodeEvents(on, config) {
      on("after:spec", (spec, results) => {
        console.log(`Spec finished: ${spec.relative}`);
        if (results && results.stats.failures) {
          console.log(
            `Failures detected in ${spec.relative}: ${results.stats.failures}`
          );
        }
      });
      return config; // Pass the configuration to Cypress
    },
  },
});
