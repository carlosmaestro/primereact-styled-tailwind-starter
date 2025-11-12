import { federation } from '@module-federation/vite';
import tailwindcss from "@tailwindcss/vite";
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    origin: 'http://localhost:2001',
    port: 2001,
  },
  base: "http://localhost:2001",
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'starter_remote',
      manifest: true,
      remotes: {
        esm_remote: {
          type: "module",
          name: "esm_remote",
          entry: "https://[...]/remoteEntry.js",
        },
        var_remote: "var_remote@https://[...]/remoteEntry.js",
      },
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App',
        './Home': './src/pages/Home',
        './Dashboard': './src/pages/Dashboard',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: '^19.0.0',
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '^19.0.0',
        },
        'react/': {
          singleton: true,
        },
      },
    }),
  ]
})
