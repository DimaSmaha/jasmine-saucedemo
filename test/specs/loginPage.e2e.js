require('dotenv').config()
const LoginPage = require("../pageobjects/login.page");
const inventoryPage = require("../pageobjects/inventory.page");
const loginPage = require("../pageobjects/login.page");

describe("Login tests |", () => {
  it("should login with valid credentials", async () => {
    await LoginPage.open();
    await browser.setWindowSize(1440, 735);
    expect(await loginPage.loginCredentials).toHaveClass("login_credentials");
    await LoginPage.doLogin(process.env.SAUCELABS_USERNAME, process.env.SAUCELABS_PASSWORD);
    await inventoryPage.backpackItemLink.waitForDisplayed();
    await expect(inventoryPage.backpackItemLink).toBeExisting();
  });

  it("should show an error whe use login with invalid credentials", async () => {
    await LoginPage.open();
    await browser.setWindowSize(1440, 735);
    await LoginPage.doLogin("invalid_user", "invalid_password");
    await expect(loginPage.errorLogin).toBeExisting();
  });

  it("should check items text", async () => {
    const backpackName = inventoryPage.backpackItemName;
    const backpackDescription = inventoryPage.backpackItemDescription;

    await LoginPage.open();
    await browser.setWindowSize(1440, 735);
    await LoginPage.doLogin(process.env.SAUCELABS_USERNAME, process.env.SAUCELABS_PASSWORD);
    await backpackName.waitForDisplayed();
    await expect(backpackName).toHaveTextContaining("Sauce Labs Backpack");
    await backpackDescription.waitForDisplayed();
    await expect(backpackDescription).toHaveTextContaining(
      "carry.allTheThings()"
    );
  });
});
