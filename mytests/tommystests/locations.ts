import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://tommys-express.com/locations/');
});