import { cp, mkdir, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(root, '..');
const dist = join(projectRoot, 'dist');

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

for (const file of ['index.html', 'styles.css', 'soccer-logo.png']) {
  await cp(join(projectRoot, file), join(dist, file));
}

console.log('Built static site to dist/');
