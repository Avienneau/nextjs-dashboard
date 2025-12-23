import { expect, type Locator, type Page } from '@playwright/test';

export class InvoicesPage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly createInvoicesButton: Locator;
  readonly invoicesTable: Locator;
  readonly invoicesTableRowPrefix: string;
  readonly paginationLeftArrow: Locator;
  readonly paginationRightArrow: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByTestId('invoices-search-input');
    this.createInvoicesButton = page.getByTestId('invoices-create-invoice-link');
    this.invoicesTable = page.getByTestId('invoices-invoices-table-root');
    this.invoicesTableRowPrefix = "invoices-invoices-table-row-";
    this.paginationLeftArrow = page.getByTestId('invoices-pagination-arrow-left');
    this.paginationRightArrow= page.getByTestId('invoices-pagination-arrow-right');
  }

  async goto() {
    await this.page.goto('/dashboard/invoices');
  }

  async createInvoice() {
    await this.createInvoicesButton.click();
  }

  async updateInvoice(invoiceNumber: number) {
    const updateLocator = this.page.getByTestId(`${this.invoicesTableRowPrefix}${invoiceNumber}-update-invoice-link`);
    await updateLocator.click();
  }

  async deleteInvoice(invoiceNumber: number) {
    const updateLocator = this.page.getByTestId(`${this.invoicesTableRowPrefix}${invoiceNumber}-delete-invoice-button`);
    await updateLocator.click();
  }
};


