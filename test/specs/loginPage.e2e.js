require('dotenv').config()
const inventoryPage = require("../pageobjects/inventory.page");
const loginPage = require("../pageobjects/login.page");

describe("Login tests |", () => {
  it("should login with valid credentials", async () => {
    await loginPage.open();
    await browser.setWindowSize(1440, 735);
    await loginPage.loginCredentials.waitForDisplayed();
    await loginPage.doLogin(process.env.SAUCELABS_USERNAME, process.env.SAUCELABS_PASSWORD);
    await inventoryPage.backpackItemLink.waitForDisplayed();
    await expect(inventoryPage.backpackItemLink).toBeExisting();
  });

  it("should show an error whe use login with invalid credentials", async () => {
    await loginPage.open();
    await browser.setWindowSize(1440, 735);
    await loginPage.doLogin("invalid_user", "invalid_password");
    await expect(loginPage.errorLogin).toBeExisting();
  });

  it("should check items text", async () => {
    const backpackName = inventoryPage.backpackItemName;
    const backpackDescription = inventoryPage.backpackItemDescription;

    await loginPage.open();
    await browser.setWindowSize(1440, 735);
    await loginPage.loginCredentials.waitForDisplayed();
    await loginPage.doLogin(process.env.SAUCELABS_USERNAME, process.env.SAUCELABS_PASSWORD);
    await backpackName.waitForDisplayed();
    await expect(await backpackName).toHaveTextContaining("Sauce Labs Backpack");
    await backpackDescription.waitForDisplayed();
    await expect(await backpackDescription).toHaveTextContaining(
      "carry.allTheThings()"
    );
  });
});
