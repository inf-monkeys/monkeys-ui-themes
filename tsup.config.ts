import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'registry/index': 'src/registry/index.ts',
    'themes/default/index': 'src/themes/default/index.ts',
    'themes/bsd/index': 'src/themes/bsd/index.ts',
    'themes/artist/index': 'src/themes/artist/index.ts',
    'themes/concept/index': 'src/themes/concept/index.ts',
  },
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  treeshake: true,
});
