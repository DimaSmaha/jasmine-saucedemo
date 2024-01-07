require('dotenv').config()
const inventoryPage = require("../pageobjects/inventory.page");
const loginPage = require("../pageobjects/login.page");

describe("Inventory tests |", () => {
  beforeEach(async () => {
    await loginPage.open();
    await browser.setWindowSize(1440, 735);
    await loginPage.doLogin(process.env.SAUCELABS_USERNAME, process.env.SAUCELABS_PASSWORD);
  });

  it("should add item to the cart", async () => {
    await expect(inventoryPage.backpackAddToCartBtn).toBeExisting();
    await inventoryPage.clickBackpackAddToCartBtn();
    await inventoryPage.backpackRemoveCartBtn.waitForDisplayed();
    await expect(inventoryPage.backpackRemoveCartBtn).toBeExisting();
  });

  it("should fail", async () => {
    await expect(inventoryPage.backpackAddToCartBtn).toBeExisting();
    await expect(inventoryPage.backpackRemoveCartBtn).toBeExisting();
  });

  it("should click item to the cart", async () => {
    await inventoryPage.backpackRemoveCartBtn.click()
    await expect(inventoryPage.backpackAddToCartBtn).toBeExisting();
    await inventoryPage.clickBackpackAddToCartBtn();
  });
});
