"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartPage = void 0;
const test_1 = require("@playwright/test");
class CartPage {
    page;
    constructor(page) {
        this.page = page;
    }
    cartItems = ".cart_item";
    checkoutButton = "#checkout";
    async verifyCartItemsCount(expectedCount) {
        const count = await this.page.locator(this.cartItems).count();
        (0, test_1.expect)(count).toBe(expectedCount);
    }
    async clickCheckout() {
        await (0, test_1.expect)(this.page.locator(this.checkoutButton)).toBeVisible();
        await this.page.click(this.checkoutButton);
        await (0, test_1.expect)(this.page).toHaveURL(/checkout-step-one.html/);
    }
}
exports.CartPage = CartPage;
