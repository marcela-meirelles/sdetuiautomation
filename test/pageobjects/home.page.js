const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Home extends Page {
    /**
     * define selectors using getter methods
     */
    open(){
        super.open('');
    }
    
    get searchBar() { return $("input#search-key") }
    get searchBarSubmitBtn() { return $(".searchbar-form .search-button")}

    searchProduct(product){
        this.searchBar.waitForEnabled(1000);
        this.searchBar.setValue(product);
        browser.keys('\uE007'); // removed clicking on element to avoid dealing with campaign iframe
    }

}

module.exports = new Home();
