# Playwright Automation Test Suite - SauceDemo

This repository contains an automated test suite for the [SauceDemo](https://www.saucedemo.com/) web application. The objective of this project is to automate the end-to-end customer checkout flow, specifically selecting 3 random items from the inventory and completing the purchase.

## 🛠 Tech Stack & Framework
* **Automation Tool:** Playwright
* **Language:** TypeScript
* **Design Pattern:** Page Object Model (POM)
* **Node Package Manager:** npm

## 📁 Project Structure
The framework is designed to be highly maintainable and scalable:
* `tests/` - Contains the main test script (`checkoutFlow.spec.ts`) executing the e2e flow.
* `pages/` - Contains Page Object classes (`LoginPage.ts`, `InventoryPage.ts`, `CartPage.ts`, `CheckoutPage.ts`, etc.) encapsulating web elements and page actions.
* `resources/` - Contains the `testData.json` file for data-driven testing (keeping credentials and test data separate from logic).
* `utils/` - Contains helper functions (e.g., logic to select random items from the inventory).
* `playwright-report/` - Automatically generated folder containing HTML test execution reports.

## ⚙️ Prerequisites
Before running the tests, ensure you have the following installed on your system:
* [Node.js](https://nodejs.org/) (v16 or higher recommended)
* Git

## 🚀 Setup & Installation Steps

**1. Clone the repository:**
```bash
git clone [https://github.com/sdabre1/lean-assignment.git](https://github.com/sdabre1/lean-assignment.git)
cd lean-assignment
2. Install dependencies:

Bash
npm install
3. Install Playwright browsers:

Bash
npx playwright install
🏃‍♂️ Test Execution
Run tests in Headless mode (Default):

Bash
npx playwright test
Run tests in Headed mode (Visible UI):

Bash
npx playwright test --headed
Run tests using Playwright UI Mode:

Bash
npx playwright test --ui
📊 Viewing Test Reports
After test execution, Playwright automatically generates a detailed HTML report. To view the report, run:

Bash
npx playwright show-report
✅ Test Scenario Covered
This suite successfully automates the following positive user flow:

Navigate to the SauceDemo login page.

Login using valid credentials (fetched from testData.json).

Verify successful navigation to the Inventory page.

Dynamically select and add 3 random items to the shopping cart.

Navigate to the Cart page and assert that exactly 3 items are present.

Proceed to Checkout.

Fill in the checkout information (First Name, Last Name, Zip Code).

Verify the checkout summary page.

Finish the checkout process.

Assert the successful order completion message ("Thank you for your order!").