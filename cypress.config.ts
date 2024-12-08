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
    baseUrl: process.env.CYPRESS_BASE_URL || "https://cicdevops.onrender.com/",
    reporter: "mochawesome", // Mochawesome is the default reporter
    reporterOptions: {
      reportDir: "cypress/reports", // Directory to save reports
      overwrite: true, // Overwrite existing reports
      html: false, // Disable HTML reports
      json: true, // Generate JSON reports
    },
    setupNodeEvents(on, config) {
      on("after:spec", (spec, results) => {
        console.log(`Spec finished: ${spec.name}`);
        if (results && results.stats.failures) {
          console.log(`Failures detected: ${results.stats.failures}`);
        }
      });
      // return config; - if needed for additional configuration / hooks
    },
  },
});
