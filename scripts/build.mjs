import { cp, mkdir, readdir, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(root, '..');
const dist = join(projectRoot, 'dist');

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

const excluded = new Set(['.git', 'dist', 'node_modules', 'scripts']);
const entries = await readdir(projectRoot, { withFileTypes: true });

for (const entry of entries) {
  if (excluded.has(entry.name) || entry.name === 'package-lock.json' || entry.name === 'package.json') continue;

  await cp(join(projectRoot, entry.name), join(dist, entry.name), { recursive: true });
}

console.log('Built static site to dist/');
