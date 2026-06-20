import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const port = Number(process.env.PORT || 4173);
const types = new Map([
  ['.html', 'text/html; charset=utf-8'],
  ['.css', 'text/css; charset=utf-8'],
  ['.png', 'image/png'],
]);

createServer(async (req, res) => {
  const url = new URL(req.url || '/', `http://localhost:${port}`);
  const requested = url.pathname === '/' ? '/index.html' : url.pathname;
  const path = normalize(join(root, requested));

  if (!path.startsWith(root)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  try {
    const body = await readFile(path);
    res.writeHead(200, { 'Content-Type': types.get(extname(path)) || 'application/octet-stream' });
    res.end(body);
  } catch {
    res.writeHead(404);
    res.end('Not found');
  }
}).listen(port, () => {
  console.log(`Preview running at http://localhost:${port}`);
});
