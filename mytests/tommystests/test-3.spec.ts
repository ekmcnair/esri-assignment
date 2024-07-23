import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://tommys-express.com/');
  await page.getByLabel('mobile menu').click();
  await page.locator('#menu-item-29').getByRole('link', { name: 'Gift Cards' }).click();
  await page.getByRole('link', { name: 'View Product' }).first().click();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await page.getByRole('button', { name: 'Check out' }).click();
  await expect(page.getByLabel('Cost summary')).toContainText('$39.97');});