import { Page, expect } from "@playwright/test";

export class CheckoutPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private firstName = "#first-name";
  private lastName = "#last-name";
  private postalCode = "#postal-code";
  private continueButton = "#continue";
  private finishButton = "#finish";

  private summaryContainer = ".summary_info";
  private checkoutCompleteHeader = ".complete-header";

  async fillCheckoutInformation(fname: string, lname: string, zip: string) {
    await expect(this.page.locator(this.firstName)).toBeVisible();

    await this.page.fill(this.firstName, fname);
    await this.page.fill(this.lastName, lname);
    await this.page.fill(this.postalCode, zip);

    await this.page.click(this.continueButton);
    await expect(this.page).toHaveURL(/checkout-step-two.html/);
  }

  async verifyCheckoutSummary() {
    await expect(this.page.locator(this.summaryContainer)).toBeVisible();
  }

  async finishCheckout() {
    await expect(this.page.locator(this.finishButton)).toBeVisible();
    await this.page.click(this.finishButton);
    await expect(this.page).toHaveURL(/checkout-complete.html/);
  }
}