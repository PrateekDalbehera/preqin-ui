import { defineConfig, loadEnv } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // vite config
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    plugins: [react()],
    server: {
      port: 3000,
      fs: {
        cachedChecks: false
      }
    },
    resolve: {
      alias: {
        '@images': path.resolve(__dirname, 'src/assets/images'),
        '@config': path.resolve(__dirname, 'src/config'),
        '@core': path.resolve(__dirname, 'src/core'),
        '@features': path.resolve(__dirname, 'src/features'),
        '@shared': path.resolve(__dirname, 'src/shared')
      },
    },
  }
});

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000,
//     fs: {
//       cachedChecks: false
//     }
//   },
//   resolve: {
//     alias: {
//       '@images': path.resolve(__dirname, 'src/assets/images'),
//       '@core': path.resolve(__dirname, 'src/core'),
//       '@features': path.resolve(__dirname, 'src/features'),
//       '@shared': path.resolve(__dirname, 'src/shared')
//     },
//   },
// })
