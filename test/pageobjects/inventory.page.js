const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page and page selectors
 */
class InventoryPage extends Page {
  /**
   * define selectors using getter methods
   */
  get backpackItemLink() {
    return $("#item_4_title_link");
  }

  get backpackItemName() {
    return $('a[id="item_4_title_link"] [class="inventory_item_name"]');
  }

  get backpackItemDescription() {
    return $('a[id="item_4_title_link"]~[class="inventory_item_desc"]');
  }

  get backpackAddToCartBtn() {
    return $("#add-to-cart-sauce-labs-backpack");
  }

  async clickBackpackAddToCartBtn() {
    await this.backpackAddToCartBtn.click();
  }

  get backpackRemoveCartBtn() {
    return $("#remove-sauce-labs-backpack");
  }
}

module.exports = new InventoryPage();
