import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// PUBLIC_INTERFACE
export default defineConfig(({ mode }) => {
  /**
   * This Vite config sets the dev server to bind to 0.0.0.0 and use port from env (VITE_PORT) defaulting to 3000.
   * It also sets preview server to the same host/port so `vite preview` works the same way in CI.
   */
  const port = Number(process.env.VITE_PORT || 3000);
  return {
    plugins: [react()],
    // The dev and preview server will always bind to 0.0.0.0 so containers can expose port 3000.
    // Port is derived from env VITE_PORT (default 3000).
    server: {
      host: '0.0.0.0',
      port,
      strictPort: true
    },
    preview: {
      host: '0.0.0.0',
      port,
      strictPort: true
    },
    build: {
      sourcemap: process.env.VITE_ENABLE_SOURCE_MAPS === 'true'
    }
  };
});
