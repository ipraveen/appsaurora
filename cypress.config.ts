import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        baseUrl: `http://localhost:8888`,
        specPattern: `cypress/e2e`,
    },
});
