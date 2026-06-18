// Post-build: remove side-effect CSS imports (e.g. `import './Button.css';`)
// from emitted .d.ts files. They are only meaningful at runtime (handled by the
// bundled design-system.css) and would otherwise cause module-resolution errors
// in consumers that type-check declaration files.
import { readdirSync, statSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const DIST = new URL('../dist', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const CSS_IMPORT = /^\s*import\s+['"][^'"]+\.css['"];?\s*$/gm;

let cleaned = 0;
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (p.endsWith('.d.ts')) {
      const src = readFileSync(p, 'utf8');
      const out = src.replace(CSS_IMPORT, '');
      if (out !== src) {
        writeFileSync(p, out);
        cleaned++;
      }
    }
  }
}

walk(DIST);
console.log(`strip-css-imports: cleaned ${cleaned} .d.ts file(s)`);
