import { defineConfig } from 'vite';

// Library build: bundles src/index.ts → dist/ as ESM + CJS, with all imported
// component CSS extracted into a single design-system.css. React is externalized.
// Types are emitted separately by `tsc -p tsconfig.build.json`.
export default defineConfig({
  // Use the automatic JSX runtime via esbuild (no @vitejs/plugin-react needed for a build).
  esbuild: { jsx: 'automatic' },
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
      fileName: (format) => (format === 'es' ? 'index.js' : 'index.cjs'),
    },
    cssCodeSplit: false,
    sourcemap: true,
    emptyOutDir: true,
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'react/jsx-dev-runtime'],
      output: {
        assetFileNames: (asset) =>
          asset.name && asset.name.endsWith('.css') ? 'design-system.css' : 'assets/[name][extname]',
      },
    },
  },
});
