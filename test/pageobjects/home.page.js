const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Home extends Page {
    /**
     * define selectors using getter methods
     */
    open(){
        super.open();
    }
    
    get searchBar() { return $("input#search-key") }
    get searchBarSubmitBtn() { return $(".searchbar-form .search-button")}
    
    // -- I could have switched frames and manually remove the pop up, but since it's not
    // -- important to the test I prefer to avoid the pop up by setting google capabilities 
    // this is the getter for the close button: get popUpCloseBtn() { return $("img.rax-image") }
    // and the method to close the pop up
    // closeCampaignPopUp(){
    //     browser.waitUntil(frameElement)
    //     browser.switchToFrame();
    //     browser.popUpCloseBtn().click();
    // }

    searchProduct(product){
        this.searchBar.setValue(product);
        this.searchBarSubmitBtn.click();
    }

}

module.exports = new Home();
