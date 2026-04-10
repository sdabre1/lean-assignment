"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const LoginPage_1 = require("../pages/LoginPage");
const InventoryPage_1 = require("../pages/InventoryPage");
const CartPage_1 = require("../pages/CartPage");
const CheckoutPage_1 = require("../pages/CheckoutPage");
const CheckoutCompletePage_1 = require("../pages/CheckoutCompletePage");
test_1.test.describe("SauceDemo Checkout Flow - Select 3 Random Items", () => {
    (0, test_1.test)("User should complete checkout successfully", async ({ page }) => {
        const loginPage = new LoginPage_1.LoginPage(page);
        const inventoryPage = new InventoryPage_1.InventoryPage(page);
        const cartPage = new CartPage_1.CartPage(page);
        const checkoutPage = new CheckoutPage_1.CheckoutPage(page);
        const completePage = new CheckoutCompletePage_1.CheckoutCompletePage(page);
        // Step 1: Go to login page
        await loginPage.goto();
        // Step 2: Login
        await loginPage.login("standard_user", "secret_sauce");
        // Step 3: Verify inventory page
        await inventoryPage.verifyInventoryPage();
        // Step 4: Add 3 random items to cart
        await inventoryPage.addRandomItemsToCart(3);
        // Step 5: Go to cart
        await inventoryPage.goToCart();
        // Step 6: Verify 3 items are present
        await cartPage.verifyCartItemsCount(3);
        // Step 7: Checkout
        await cartPage.clickCheckout();
        // Step 8: Fill checkout details
        await checkoutPage.fillCheckoutInformation("Sujay", "Dabre", "411001");
        // Step 9: Verify checkout summary
        await checkoutPage.verifyCheckoutSummary();
        // Step 10: Finish checkout
        await checkoutPage.finishCheckout();
        // Step 11: Verify order success page
        await completePage.verifyOrderSuccess();
        // Step 12: Back to home (optional)
        await completePage.backToHome();
    });
});
