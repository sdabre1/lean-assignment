import { Page, expect } from "@playwright/test";

export class CartPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private cartItems = ".cart_item";
  private checkoutButton = "#checkout";

  async verifyCartItemsCount(expectedCount: number) {
    const count = await this.page.locator(this.cartItems).count();
    expect(count).toBe(expectedCount);
  }

  async clickCheckout() {
    await expect(this.page.locator(this.checkoutButton)).toBeVisible();
    await this.page.click(this.checkoutButton);
    await expect(this.page).toHaveURL(/checkout-step-one.html/);
  }
}