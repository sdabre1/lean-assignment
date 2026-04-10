"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
const test_1 = require("@playwright/test");
class LoginPage {
    page;
    constructor(page) {
        this.page = page;
    }
    usernameInput = "#user-name";
    passwordInput = "#password";
    loginButton = "#login-button";
    async goto() {
        await this.page.goto("/");
        await (0, test_1.expect)(this.page).toHaveURL(/saucedemo/);
    }
    async login(username, password) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }
}
exports.LoginPage = LoginPage;
