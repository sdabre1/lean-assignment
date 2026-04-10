"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutCompletePage = void 0;
const test_1 = require("@playwright/test");
class CheckoutCompletePage {
    page;
    constructor(page) {
        this.page = page;
    }
    completeHeader = ".complete-header";
    completeText = ".complete-text";
    backHomeButton = "#back-to-products";
    async verifyOrderSuccess() {
        await (0, test_1.expect)(this.page.locator(this.completeHeader)).toHaveText("Thank you for your order!");
        await (0, test_1.expect)(this.page.locator(this.completeText)).toBeVisible();
    }
    async backToHome() {
        await this.page.click(this.backHomeButton);
        await (0, test_1.expect)(this.page).toHaveURL(/inventory.html/);
    }
}
exports.CheckoutCompletePage = CheckoutCompletePage;
