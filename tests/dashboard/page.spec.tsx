import { test, expect } from './fixture';

const dollarAmountRegex = /\$\d+(?:,\d{3})*(?:\.\d{2})?/;
const digitRegex = /[0-9]+/;

function doCardTests(title: string, memberFunction: string, matchExpression: RegExp) {
  test.describe(`${title} card`, () => {
    test(`should have a title of ${title}`, async ({ dashboardPage }) => {
      const card = dashboardPage[`${memberFunction}`]();
      await expect(card).toContainText(title);
    });
    test('should contain a dollar amount', async ({ dashboardPage }) => {
      const card = dashboardPage[`${memberFunction}`]();
      await expect(card).toContainText(matchExpression);
    });
  });
}
test.use({ storageState: "tests/.auth/user.json" });
doCardTests('Collected', 'getCollectedCard', dollarAmountRegex);
doCardTests('Pending', 'getPendingCard', dollarAmountRegex);
doCardTests('Total Invoices', 'getTotalInvoicesCard', digitRegex);
doCardTests('Total Customers', 'getTotalCustomersCard', digitRegex);


