"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutPage = void 0;
const test_1 = require("@playwright/test");
class CheckoutPage {
    page;
    constructor(page) {
        this.page = page;
    }
    firstName = "#first-name";
    lastName = "#last-name";
    postalCode = "#postal-code";
    continueButton = "#continue";
    finishButton = "#finish";
    summaryContainer = ".summary_info";
    checkoutCompleteHeader = ".complete-header";
    async fillCheckoutInformation(fname, lname, zip) {
        await (0, test_1.expect)(this.page.locator(this.firstName)).toBeVisible();
        await this.page.fill(this.firstName, fname);
        await this.page.fill(this.lastName, lname);
        await this.page.fill(this.postalCode, zip);
        await this.page.click(this.continueButton);
        await (0, test_1.expect)(this.page).toHaveURL(/checkout-step-two.html/);
    }
    async verifyCheckoutSummary() {
        await (0, test_1.expect)(this.page.locator(this.summaryContainer)).toBeVisible();
    }
    async finishCheckout() {
        await (0, test_1.expect)(this.page.locator(this.finishButton)).toBeVisible();
        await this.page.click(this.finishButton);
        await (0, test_1.expect)(this.page).toHaveURL(/checkout-complete.html/);
    }
}
exports.CheckoutPage = CheckoutPage;
