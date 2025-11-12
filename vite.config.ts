import { federation } from '@module-federation/vite';
import tailwindcss from "@tailwindcss/vite";
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    origin: 'http://localhost:2000',
    port: 2000,
  },
  base: "http://localhost:2000",
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'starter',
      manifest: true,
      remotes: {
        starter_remote: {
          type: "module",
          name: "starter_remote",
          entry: "http://localhost:2001/remoteEntry.js",
        },
        var_remote: "var_remote@https://[...]/remoteEntry.js",
      },
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/app',
        './Home': './src/pages/Home',
      },
      shared: {
        react: {
          singleton: true,
        },
        'react/': {
          singleton: true,
        },
      },
    }),
  ]
})
