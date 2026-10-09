import { defineConfig } from 'vite';

// O site é um index.html único (HTML, CSS e JS inline), sem build próprio.
// O Vite só serve o preview no Lovable; os arquivos estáticos são copiados no build.
export default defineConfig({
  server: { host: '::', port: 8080 },
  publicDir: false,
});
