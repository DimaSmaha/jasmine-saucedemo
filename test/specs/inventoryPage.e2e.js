const LoginPage = require("../pageobjects/login.page");
const inventoryPage = require("../pageobjects/inventory.page");
const loginPage = require("../pageobjects/login.page");

describe("Login tests", () => {
  beforeEach(async () => {
    await LoginPage.open();
    await LoginPage.doLogin("standard_user", "secret_sauce");
  });

  it("should add item to the cart", async () => {
    await expect(inventoryPage.backpackAddToCartBtn).toBeExisting();
    await inventoryPage.clickBackpackAddToCartBtn();
    await inventoryPage.backpackRemoveCartBtn.waitForDisplayed();
    await expect(inventoryPage.backpackRemoveCartBtn).toBeExisting();
  });
});
