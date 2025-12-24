import { test, expect } from './fixture';

test('should have an email input', async({ validLoginPage }) => {
  await expect(validLoginPage.formEmailInput()).toBeVisible();
});

test('should have a password input', async({ validLoginPage }) => {
  await expect(validLoginPage.formPasswordInput()).toBeVisible();
});

test('should have a login button', async({ validLoginPage }) => {
  await expect(validLoginPage.formLoginButton()).toBeVisible();
});
