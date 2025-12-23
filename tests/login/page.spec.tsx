import { test, expect } from './fixture';

test('should redirect on valid input', async({page, validLoginPage }) => {
  await validLoginPage.submitLogin();
  await expect(page).toHaveURL('/dashboard');
  await page.context().storageState({
    path: 'auth.json',
  });
});

