import { test, expect } from '@playwright/test';

test('should have login button', async ({ page }) => {
  await page.goto('/');
  const loginButton = page.getByTestId('app-page-login-btn');
  await expect(loginButton).toHaveAttribute('href', '/login');
});
