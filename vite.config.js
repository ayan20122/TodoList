import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  // Set base to the repository name so assets load correctly on GitHub Pages
  base: "/TodoList/",
  plugins: [react(), tailwindcss()],
});
