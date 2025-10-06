import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/BioOrbits-frontend/", 
  server: {
    proxy: {
      "/api": {
        target: "http://3.135.179.15:5050",
        changeOrigin: true,
      },
    },
  },
});
