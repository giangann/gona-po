// @ts-nocheck
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/

export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    // To access env vars here use process.env.TEST_VAR
    base: process.env.VITE_BASE_URL,
    plugins: [react(), tsconfigPaths()],
    define: {
      global: {},
      "process.env": {},
    },
  });
};
