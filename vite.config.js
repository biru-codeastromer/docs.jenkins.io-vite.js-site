import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import yaml from '@rollup/plugin-yaml';

export default defineConfig({
  plugins: [react(), yaml()],
  server: {
    port: 3000
  },
  optimizeDeps: {
    include: [
      '@jenkinsci/jenkins-io-components',
      '@webcomponents/webcomponentsjs'
    ]
  }
});