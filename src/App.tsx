import React from 'react';

const env = {
  VITE_API_BASE: import.meta.env.VITE_API_BASE,
  VITE_BACKEND_URL: import.meta.env.VITE_BACKEND_URL,
  VITE_FRONTEND_URL: import.meta.env.VITE_FRONTEND_URL,
  VITE_WS_URL: import.meta.env.VITE_WS_URL,
  VITE_NODE_ENV: import.meta.env.VITE_NODE_ENV,
  VITE_ENABLE_SOURCE_MAPS: import.meta.env.VITE_ENABLE_SOURCE_MAPS,
  VITE_PORT: import.meta.env.VITE_PORT,
  VITE_HEALTHCHECK_PATH: import.meta.env.VITE_HEALTHCHECK_PATH
};

// PUBLIC_INTERFACE
export default function App(): JSX.Element {
  /** Root application component. Shows environment configuration and a basic welcome. */
  return (
    <div className="container">
      <header className="hero">
        <h1>Recipe Pro</h1>
        <p className="subtitle">Vite + React starter</p>
      </header>

      <section className="card">
        <h2>Environment</h2>
        <pre>{JSON.stringify(env, null, 2)}</pre>
      </section>

      <section className="card">
        <h2>Health Check</h2>
        <p>
          Health path: <code>{env.VITE_HEALTHCHECK_PATH || '/healthz'}</code>
        </p>
        <p>
          Backend: <code>{env.VITE_BACKEND_URL || env.VITE_API_BASE || 'not set'}</code>
        </p>
      </section>

      <footer className="footer">
        <small>Running on port {env.VITE_PORT || 3000} (host 0.0.0.0)</small>
      </footer>
    </div>
  );
}
