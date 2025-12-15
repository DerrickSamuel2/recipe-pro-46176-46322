# Recipe Pro

This is a Vite + React starter configured to run on port 3000 and bind to 0.0.0.0.

## Scripts

- npm run dev — start Vite dev server on 0.0.0.0:3000 (respects VITE_PORT in .env)
- npm run build — build production bundle
- npm run preview — preview built app on 0.0.0.0:3000
- npm run typecheck — TypeScript type check
- npm run lint — ESLint

## Environment

The following env vars are supported (see .env):

- VITE_API_BASE
- VITE_BACKEND_URL
- VITE_FRONTEND_URL
- VITE_WS_URL
- VITE_NODE_ENV
- VITE_NEXT_TELEMETRY_DISABLED
- VITE_ENABLE_SOURCE_MAPS
- VITE_PORT
- VITE_TRUST_PROXY
- VITE_LOG_LEVEL
- VITE_HEALTHCHECK_PATH
- VITE_FEATURE_FLAGS
- VITE_EXPERIMENTS_ENABLED

Default port is 3000 if VITE_PORT is not provided. The server binds to 0.0.0.0 for containerized environments.

## Running

1. Install dependencies
   npm ci

2. Start dev server
   npm run dev

3. Or build and preview
   npm run build
   npm run preview
