import { defineConfig } from "vite";
import path from "path";

// https://vitejs.dev/config
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      external: [
        "better-sqlite3",
        "fs-extra",
        "dugite",
        "kill-port",
        "tree-kill",
        "@babel/parser",
        "@babel/traverse",
        "recast",
        "glob",
        "isomorphic-git",
        "stacktrace-js",
        "shell-env",
        "ai",
      ],
    },
  },
  plugins: [
    {
      name: "restart",
      closeBundle() {
        process.stdin.emit("data", "rs");
      },
    },
  ],
});
