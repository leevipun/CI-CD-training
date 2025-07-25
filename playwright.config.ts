import { defineConfig } from '@playwright/test';
export default defineConfig({
    webServer: {
        command: 'npm run start-test',
        url: 'http://localhost:8080',
        timeout: 120 * 1000,
        reuseExistingServer: !process.env.CI,
    },
    use: {
        baseURL: 'http://localhost:8080/',
    },
    testMatch: '**/e2e.test.js',
});