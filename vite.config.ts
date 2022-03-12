import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import { createVuePlugin as vue2 } from 'vite-plugin-vue2';
import vueTemplateBabelCompiler from 'vue-template-babel-compiler';
import scriptSetup from 'unplugin-vue2-script-setup/vite';

export default defineConfig({
  plugins: [
    vue2({
      jsx: true,
      vueTemplateOptions: {
        compiler: vueTemplateBabelCompiler,
      },
    }),
    scriptSetup(),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
