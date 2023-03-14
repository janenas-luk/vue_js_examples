// const { createVuePlugin } = require('vite-plugin-vue2');

// module.exports = {
//   plugins: [createVuePlugin()],
// };

import { defineConfig } from "vitest/config";
import vue from '@vitejs/plugin-vue2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
  }
})