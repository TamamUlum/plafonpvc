import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://plafonpvcsolo.com',
  build: {
    format: 'directory'
  },
  redirects: {
    '/e-katalog': '/produk'
  }
});

