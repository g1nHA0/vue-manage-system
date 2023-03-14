import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import VueSetupExtend from "vite-plugin-vue-setup-extend";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  base: "/vue-manage-system/",
  plugins: [
    vue(),
    VueSetupExtend(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    // ↓路径别名，主要是这部分
    alias: {
      "@": path.join(__dirname, "./src"),
      "@components": path.join(__dirname, "./src/components"),
      "@utils": path.join(__dirname, "./src/utils"),
      "@router": path.join(__dirname, "./src/router"),
      "@request": path.join(__dirname, "./src/utils/request"),
      "@store": path.join(__dirname, "./src/store"),
      "@storage": path.join(__dirname, "./src/utils/storage"),
      "@model": path.join(__dirname, "./src/utils/model"),
      "@service": path.join(__dirname, "./src/api/service"),
      "@handler": path.join(__dirname, "./src/api/handler"),
    },
  },
  optimizeDeps: {
    include: ["schart.js"],
  },
});
