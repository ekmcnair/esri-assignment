import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://tommys-express.com/');
  await page.getByLabel('mobile menu').click();
  await page.locator('#menu-item-1272').getByRole('link', { name: 'Fleets' }).click();
  await page.getByRole('link', { name: 'Sign up Online' }).click();
  await page.frameLocator('iframe[title="TX Fleet Signup"]').getByLabel('START').click();
  
  await page.frameLocator('iframe[title="TX Fleet Signup"]').getByPlaceholder('Enter your vehicle total. ').fill('12');
  await page.frameLocator('iframe[title="TX Fleet Signup"]').getByTestId('nextButton_0').click();
  await page.frameLocator('iframe[title="TX Fleet Signup"]').getByLabel('Full Name* This field is').fill('Evan McNair');
  await page.frameLocator('iframe[title="TX Fleet Signup"]').getByTestId('nextButton_1').click();
  await page.frameLocator('iframe[title="TX Fleet Signup"]').getByLabel('Company Name* This field is').fill('Evan\'s Rentals');
  
  await page.frameLocator('iframe[title="TX Fleet Signup"]').getByTestId('nextButton_2').click();
  await page.frameLocator('iframe[title="TX Fleet Signup"]').getByLabel('Company Email* This field is').fill('ekmcnair@er.com');
  await page.frameLocator('iframe[title="TX Fleet Signup"]').getByTestId('nextButton_3').click();
  await page.frameLocator('iframe[title="TX Fleet Signup"]').getByLabel('Please enter a valid phone').fill('(123) 456-7890');
  await page.frameLocator('iframe[title="TX Fleet Signup"]').getByTestId('nextButton_4').click();
  await page.frameLocator('iframe[title="TX Fleet Signup"]').frameLocator('iframe[title="Postal Code Search"]').getByLabel('Search US Zip Codes').selectOption('US');
  await page.frameLocator('iframe[title="TX Fleet Signup"]').frameLocator('iframe[title="Postal Code Search"]').getByLabel('Enter Zip Code:').click();
  await page.frameLocator('iframe[title="TX Fleet Signup"]').frameLocator('iframe[title="Postal Code Search"]').getByLabel('Enter Zip Code:').fill('46033');
  await page.frameLocator('iframe[title="TX Fleet Signup"]').getByTestId('nextButton_5').click();
  await page.frameLocator('iframe[title="TX Fleet Signup"]').getByTestId('nextButton_9').click();
  await page.frameLocator('iframe[title="TX Fleet Signup"]').frameLocator('iframe[title="Terms \\& Conditions"]').getByText('I agree to the terms &').click();
  await page.frameLocator('iframe[title="TX Fleet Signup"]').getByRole('button', { name: 'Submit' }).click();
  await expect(page.frameLocator('iframe[title="TX Fleet Signup"]').getByLabel('thank you check icon')).toBeVisible();
});