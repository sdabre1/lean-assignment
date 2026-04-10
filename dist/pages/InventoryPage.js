"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryPage = void 0;
const test_1 = require("@playwright/test");
const randomItems_1 = require("../utils/randomItems");
class InventoryPage {
    page;
    constructor(page) {
        this.page = page;
    }
    inventoryContainer = ".inventory_list";
    inventoryItems = ".inventory_item";
    addToCartButtons = "button.btn_inventory";
    cartIcon = ".shopping_cart_link";
    cartBadge = ".shopping_cart_badge";
    async verifyInventoryPage() {
        await (0, test_1.expect)(this.page.locator(this.inventoryContainer)).toBeVisible();
        await (0, test_1.expect)(this.page).toHaveURL(/inventory.html/);
    }
    async addRandomItemsToCart(count = 3) {
        const items = this.page.locator(this.inventoryItems);
        const totalItems = await items.count();
        (0, test_1.expect)(totalItems).toBeGreaterThanOrEqual(count);
        const randomIndexes = (0, randomItems_1.getRandomIndexes)(totalItems, count);
        for (const index of randomIndexes) {
            const addBtn = items.nth(index).locator("button.btn_inventory");
            await addBtn.click();
        }
        await (0, test_1.expect)(this.page.locator(this.cartBadge)).toHaveText(count.toString());
    }
    async goToCart() {
        await this.page.click(this.cartIcon);
        await (0, test_1.expect)(this.page).toHaveURL(/cart.html/);
    }
}
exports.InventoryPage = InventoryPage;
