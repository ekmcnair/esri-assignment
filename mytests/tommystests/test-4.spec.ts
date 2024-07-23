import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://tommys-express.com/');
  await page.getByRole('link', { name: 'Refer a friend', exact: true }).click();
  await expect(page.getByRole('img', { name: 'Referral QR Code' })).toBeVisible();
});