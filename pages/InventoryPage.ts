import { Page, expect } from "@playwright/test";
import { getRandomIndexes } from "../utils/randomItems";

export class InventoryPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private inventoryContainer = ".inventory_list";
  private inventoryItems = ".inventory_item";
  private addToCartButtons = "button.btn_inventory";
  private cartIcon = ".shopping_cart_link";
  private cartBadge = ".shopping_cart_badge";

  async verifyInventoryPage() {
    await expect(this.page.locator(this.inventoryContainer)).toBeVisible();
    await expect(this.page).toHaveURL(/inventory.html/);
  }

  async addRandomItemsToCart(count: number = 3) {
    const items = this.page.locator(this.inventoryItems);
    const totalItems = await items.count();

    expect(totalItems).toBeGreaterThanOrEqual(count);

    const randomIndexes = getRandomIndexes(totalItems, count);

    for (const index of randomIndexes) {
      const addBtn = items.nth(index).locator("button.btn_inventory");
      await addBtn.click();
    }

    await expect(this.page.locator(this.cartBadge)).toHaveText(count.toString());
  }

  async goToCart() {
    await this.page.click(this.cartIcon);
    await expect(this.page).toHaveURL(/cart.html/);
  }
}