import { test as base } from '@playwright/test';
import { LoginPage } from './page';

type MyFixtures = {
  validLoginPage: LoginPage;
  invalidLoginPage: LoginPage;
};

export const test = base.extend<MyFixtures>({
  validLoginPage: async ({ page }, use) => {
    const validEmail = 'aaron.vienneau@gmail.com';
    const validPassword = '123456';
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.inputEmailAndPassword(validEmail, validPassword);
    await use(loginPage);
  },
  invalidLoginPage: async({ page }, use) => {
    const invalidEmail = 'test@test.com';
    const invalidPassword = 'abc123';
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.inputEmailAndPassword(invalidEmail, invalidPassword);
    await use(loginPage);
  },
});
export { expect } from '@playwright/test';

