import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://tommys-express.com/');
  await page.getByRole('link', { name: 'Try us for free' }).click();
  await page.getByLabel('I would like to receive promotional messages.').check();
  await page.getByLabel('I would like to receive informational messages about weather conditions and').check();
  await page.locator('#ntfc_sms_phone').click();
  await page.locator('#ntfc_sms_phone').fill('3176567009');
  await page.getByRole('button', { name: 'Try Tommy\'s Express' }).click();
  await expect(page.locator('#ntfc_sms_complete_form_area')).toContainText('Thanks for opting in');
});