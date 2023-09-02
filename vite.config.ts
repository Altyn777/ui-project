import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "ui-project/components/MyComponent.tsx",
      formats: ["es"],
    },
    // rollupOptions: {}
  },
});
