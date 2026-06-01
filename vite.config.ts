import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: { port: 3001 },
  resolve: {
    alias: { "@": `${process.cwd()}/src` },
    dedupe: [
      "react", "react-dom",
      "react/jsx-runtime", "react/jsx-dev-runtime",
      "@tanstack/react-query", "@tanstack/query-core",
    ],
  },
  plugins: [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart(),
    nitro({
      preset: "cloudflare-pages",
      output: {
        dir: "dist",
        serverDir: "{{ output.dir }}/_worker.js",
        publicDir: "dist",
      },
      cloudflare: { nodeCompat: true },
    }),
    viteReact(),
  ],
});
