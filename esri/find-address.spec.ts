import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.arcgis.com/index.html');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByPlaceholder('Username').fill('ekmcnair');
  await page.getByPlaceholder('Username').press('Tab');
  await page.getByPlaceholder('Password').fill('Frozone18!');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Map', exact: true }).click();
  await page.locator('canvas').click({
    button: 'right',
    position: {
      x: 792,
      y: 318
    }
  });
  await page.getByRole('button', { name: 'What\'s here?' }).click();
  await page.locator('div').filter({ hasText: /^County Road 202, Marshall, MO, 65340, USA39\.107084, -93\.112030$/ }).first().click();
});