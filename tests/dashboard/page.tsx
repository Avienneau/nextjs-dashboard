import { expect, type Locator, type Page } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly collectedCard: Locator;
  readonly pendingCard: Locator;
  readonly totalInvoicesCard: Locator;
  readonly totalCustomersCard: Locator;
  readonly revenueChart: Locator;
  readonly latestInvoicesTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.collectedCard = page.getByTestId('dashboard-collected-card');
    this.pendingCard = page.getByTestId('dashboard-pending-card');
    this.totalInvoicesCard = page.getByTestId('dashboard-total-invoices-card');
    this.totalCustomersCard = page.getByTestId('dashboard-total-customers-card');
    this.revenueChart = page.getByTestId('dashboard-revenue-chart');
    this.latestInvoicesTable = page.getByTestId('dashboard-latest-invoices-table');
  }

  async goto() {
    await this.page.goto('/dashboard');
  }

  getCollectedCard() { return this.collectedCard; }
  getPendingCard() { return this.pendingCard; }
  getTotalInvoicesCard() { return this.totalInvoicesCard; }
  getTotalCustomersCard() { return this.totalCustomersCard; }
  getRevenueChart() { return this.revenueChart; }
  getLatestInvoicesTable() { return this.latestInvoicesTable; }
};

