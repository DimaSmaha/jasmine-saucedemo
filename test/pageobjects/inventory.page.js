const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InventoryPage extends Page {
  /**
   * define selectors using getter methods
   */
  get backpackItemLink() {
    return $("#item_4_title_link");
  }
}

module.exports = new InventoryPage();
