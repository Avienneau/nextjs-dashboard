import { test as setup, expect } from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, './.auth/user.json');

setup('authenticate', async ({ page }) => {
  await page.goto('/login');
  await page.getByTestId('login-form-email-input').fill('aaron.vienneau@gmail.com');
  await page.getByTestId('login-form-password-input').fill('123456');
  await page.getByTestId('login-form-login-button').click();
  await page.waitForURL('/dashboard');
  await page.context().storageState({ path: authFile });
});
