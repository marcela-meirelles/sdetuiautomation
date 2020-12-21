const Page = require('./page');

class ItemPage extends Page {

    open() {
        return super.open('');
    }
    /* It could have been directly navigated to the item's page since it would be simple to get the item's id and form the 
    url: '/item/4001154238954.html'; But since it is stated in the requirements that the item should be the second one listed, 
    and not any particular item, and the list may vary in time, it would better comply with the requirements to navigate from the UI.
    */
    get productId() { return $('#productId') } // see first comment

    get availableProductQuantityElement() { return $('.product-quantity-tip > span') }

    getItemsQuantity() {
        this.availableProductQuantityElement.waitForDisplayed();
        return parseInt(this.availableProductQuantityElement.getText());
    }

}

module.exports = new ItemPage();