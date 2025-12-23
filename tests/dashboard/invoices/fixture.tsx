import { test as base } from '@playwright/test';
import { InvoicesPage } from './page';

type MyFixtures = {
  invoicesPage: InvoicesPage;
};

export const test = base.extend<MyFixtures>({
  invoicesPage: async ({ page }, use) => {
    const invoicesPage = new InvoicesPage(page);
    await invoicesPage.goto();
    await use(invoicesPage);
  },
});
export { expect } from '@playwright/test';



