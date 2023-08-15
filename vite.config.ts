import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'node:path';
import AutoImport from 'unplugin-auto-import/vite'; // VueApi自动导入
import Components from 'unplugin-vue-components/vite'; // 组件使用的自动导入
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: true,
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      dts: true,
      resolvers: [ElementPlusResolver()]
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/styles/index.scss";'
      }
    }
  },
  resolve: {
    alias: {
      // 配置别名
      '@': fileURLToPath(new URL('./src', import.meta.url)), // 访问src目录
      '#': path.resolve(__dirname, './src/typings') //访问 src/typings 目录
    }
  },
  server: {
    // 配置代理
    proxy: {
      /* "/api": {
        target: "",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      }, */
    }
  }
});
