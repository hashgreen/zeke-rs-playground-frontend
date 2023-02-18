import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import wasm from "vite-plugin-wasm";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/zeke-rs-playground-frontend/",
  plugins: [wasm(), react()],
});
