import { defineConfig, normalizePath } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import viteEslint from 'vite-plugin-eslint';
import viteStylelint from 'vite-plugin-stylelint';
import svgr from 'vite-plugin-svgr';
import viteImagemin from 'vite-plugin-imagemin';

const variablePath = normalizePath(path.resolve('./src/variable.scss'));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteEslint(),
    viteStylelint({
      exclude: ['windicss', 'node_modules']
    }),
    svgr(),
    viteImagemin({
      // 无损压缩配置，无损压缩下图片质量不会变差
      optipng: {
        optimizationLevel: 7
      },
      // 有损压缩配置，有损压缩下图片质量可能会变差
      pngquant: {
        quality: [0.8, 0.9]
      },
      // svg 优化
      svgo: {
        plugins: [
          {
            name: 'removeViewBox'
          },
          {
            name: 'removeEmptyAttrs',
            active: false
          }
        ]
      }
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '${variablePath}';`
      }
    },
    modules: {
      generateScopedName: '[name]_[local]_[hash:base64:5]'
    }
  },
  json: { stringify: true },
  resolve: {
    alias: {
      '@assets': path.join(__dirname, 'src/assets')
    }
  },
  build: {
    // 不超过3kb的资源作为base64格式内联
    assetsInlineLimit: 3 * 1024
  }
});
