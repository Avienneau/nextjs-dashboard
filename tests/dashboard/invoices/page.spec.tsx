import { test, expect } from './fixture';

test.use({ storageState: "tests/.auth/user.json" });
test('should allow new invoice creation', async ({ page, invoicesPage }) => {
  await invoicesPage.createInvoice();
  await expect(page).toHaveURL(/.*\/create.*/);
});

test('should allow invoice updating', async ({ page, invoicesPage }) => {
  await invoicesPage.updateInvoice(0);
  await expect(page).toHaveURL(/.*\/edit.*/);
});

