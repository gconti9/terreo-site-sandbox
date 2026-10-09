// Copia para dist/ os arquivos que o index.html referencia por caminho absoluto.
import { cpSync, existsSync } from 'node:fs';

const files = ['assets', 'favicon.svg', 'favicon.ico', 'apple-touch-icon.png', 'site.webmanifest', 'robots.txt', 'sitemap.xml'];
for (const f of files) if (existsSync(f)) cpSync(f, `dist/${f}`, { recursive: true });
