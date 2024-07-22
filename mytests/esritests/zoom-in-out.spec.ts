import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.arcgis.com/index.html');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByPlaceholder('Username').fill('ekmcnair');
  await page.getByPlaceholder('Password').fill('Frozone18!');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Map', exact: true }).click();
  await page.getByLabel('Zoom in').click();
  await page.getByLabel('Zoom out').click();
});