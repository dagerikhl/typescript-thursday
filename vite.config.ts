import { defineConfig } from "vite";

export default defineConfig({
  test: {
    include: ["src/**/*.ts"],
    setupFiles: ["tests/setup.ts"],
    passWithNoTests: true,
  },
});
