const inventoryPage = require("../pageobjects/inventory.page");
const loginPage = require("../pageobjects/login.page");

describe("Inventory tests", () => {
  beforeEach(async () => {
    await loginPage.open();
    await loginPage.doLogin("standard_user", "secret_sauce");
  });

  it("should add item to the cart", async () => {
    await expect(inventoryPage.backpackAddToCartBtn).toBeExisting();
    await inventoryPage.clickBackpackAddToCartBtn();
    await inventoryPage.backpackRemoveCartBtn.waitForDisplayed();
    await expect(inventoryPage.backpackRemoveCartBtn).toBeExisting();
  });

  it(
    "should fail",
    async () => {
      await expect(inventoryPage.backpackAddToCartBtn).toBeExisting();
      await expect(inventoryPage.backpackRemoveCartBtn).toBeExisting();
    },
    jasmine.DEFAULT_TIMEOUT_INTERVAL,
    2
  );

  xit("should click item to the cart", async () => {
    await expect(inventoryPage.backpackAddToCartBtn).toBeExisting();
    await inventoryPage.clickBackpackAddToCartBtn();
  });
});
