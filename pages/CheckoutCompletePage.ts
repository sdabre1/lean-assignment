import { Page, expect } from "@playwright/test";

export class CheckoutCompletePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private completeHeader = ".complete-header";
  private completeText = ".complete-text";
  private backHomeButton = "#back-to-products";

  async verifyOrderSuccess() {
    await expect(this.page.locator(this.completeHeader)).toHaveText("Thank you for your order!");
    await expect(this.page.locator(this.completeText)).toBeVisible();
  }

  async backToHome() {
    await this.page.click(this.backHomeButton);
    await expect(this.page).toHaveURL(/inventory.html/);
  }
}