import { Page, expect } from "@playwright/test";

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private usernameInput = "#user-name";
  private passwordInput = "#password";
  private loginButton = "#login-button";

  async goto() {
    await this.page.goto("/");
    await expect(this.page).toHaveURL(/saucedemo/);
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }
}