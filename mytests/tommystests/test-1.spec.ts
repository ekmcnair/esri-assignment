import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://tommys-express.com/');
  await page.getByRole('link', { name: 'Find your location' }).click();
  await page.getByPlaceholder('Enter a zip code').click();
  await page.getByPlaceholder('Enter a zip code').fill('46033');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByLabel('Franklin').click();
  await page.getByRole('link', { name: 'Franklin Location 1221 E.' }).click();
  await expect(page.getByRole('heading', { name: 'Hours' })).toBeVisible();});
  