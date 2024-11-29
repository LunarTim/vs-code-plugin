import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'istanbul',
    },
    globals: true,
    environment: 'node',
    include: ['**/tests/**/*.test.ts'],
    //include: ['compiler/tests/**/.test.ts'],
  },
});