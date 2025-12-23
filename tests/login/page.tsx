import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByTestId('login-form-email-input');
    this.passwordInput = page.getByTestId('login-form-password-input');
    this.loginButton = page.getByTestId('login-form-login-button');
    this.errorMessage = page.getByTestId('login-form-error-message');
  }

  async goto() {
    await this.page.goto('/login');
  }

  async inputEmail(email: string) {
    await this.emailInput.pressSequentially(email);
  }

  async inputPassword(password: string) {
    await this.passwordInput.pressSequentially(password);
  }

  async inputEmailAndPassword(email: string, password: string) {
    await this.inputEmail(email);
    await this.inputPassword(password);
  }

  async submitLogin() {
    await this.loginButton.click();
  }

  formErrorMessage() {
    return this.errorMessage;
  }

};
