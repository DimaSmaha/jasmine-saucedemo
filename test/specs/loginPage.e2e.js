const LoginPage = require("../pageobjects/login.page");
const inventoryPage = require("../pageobjects/inventory.page");
const loginPage = require("../pageobjects/login.page");

describe("Login tests", () => {
  it("should login with valid credentials", async () => {
    await LoginPage.open();
    await expect(loginPage.loginCredentials).toHaveClass("login_credentials");
    await LoginPage.doLogin("standard_user", "secret_sauce");
    await expect(inventoryPage.backpackItemLink).toBeExisting();
  });

  it("should show an error whe use login with invalid credentials", async () => {
    await LoginPage.open();
    await LoginPage.doLogin("invalid_user", "invalid_password");
    await expect(loginPage.errorLogin).toBeExisting();
  });
});
