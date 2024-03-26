import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: "esbuild",
    cssMinify: "esbuild",
    cssCodeSplit: true,
    manifest: true,
    sourcemap: "inline",
  },
  cacheDir: ".vite",
});
