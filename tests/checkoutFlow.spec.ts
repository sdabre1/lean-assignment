import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { CheckoutCompletePage } from "../pages/CheckoutCompletePage";

import testData from "../resources/testData.json";

test.describe("SauceDemo Checkout Flow - Select 3 Random Items", () => {
  test("User should complete checkout successfully", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const completePage = new CheckoutCompletePage(page);

    // Step 1: Go to login page
    await loginPage.goto();

    // Step 2: Login
    await loginPage.login(testData.loginCredentials.username, testData.loginCredentials.password);
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
    await checkoutPage.fillCheckoutInformation(testData.checkoutDetails.firstName,testData.checkoutDetails.lastName,testData.checkoutDetails.zipCode);

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