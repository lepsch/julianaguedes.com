import { defineConfig, type Plugin } from "vite"
import { reactRouter } from "@react-router/dev/vite"
import sitemap from "vite-plugin-sitemap"
import svgr from "vite-plugin-svgr"
import { BASE_URL } from "./app/constants"

export default defineConfig(({ command, isSsrBuild }) => ({
  plugins: [
    reactRouter(),
    svgr({
      svgrOptions: {
        // Forward `ref` to the root SVG tag.
        ref: true,
        // Do not prefix `class`/`id` attributes.
        svgo: false,
      },
      // Both `.svg` and `.svg?react` imports are React components
      include: ["**/*.svg", "**/*.svg?react"],
    }),
    sitemap({
      hostname: BASE_URL,
      exclude: ["/securimage/captcha", "/securimage/database", "/tarteaucitronjs"],
      outDir: "build/client",
      robots: [
        {
          userAgent: "*",
          disallow: ["/securimage/", "/tarteaucitronjs/"],
        },
      ],
      changefreq: "monthly",
      priority: {
        "/": 1.0,
        "/contacto": 0.7,
        "/sobre": 0.5,
        "/tratamentos": 0.5,
      },
    }) as Plugin,
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
  build: {
    rollupOptions: {
      ...(isSsrBuild
        ? {}
        : {
            // Compile a separate entry-point for sourcing it from `<script />`
            input: ["./app/tarteaucitron-init.ts"],
            output: {
              entryFileNames: (chunkInfo) =>
                chunkInfo.name === "tarteaucitron-init" ? "assets/[name].js" : "assets/[name]-[hash].js",
            },
          }),
    },
  },
  define: {
    // For dev-server set it to the source code itself. Otherwise, set it
    // to the compiled asset
    TARTEAUCITRON_INIT_URL: JSON.stringify(
      command === "build" ? "/assets/tarteaucitron-init.js" : "/app/tarteaucitron-init.ts",
    ),
  },
}))
