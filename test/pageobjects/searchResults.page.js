const Page = require('./page');

class SearchResults extends Page {
    
    /**
     * Define selectors using getter methods
     */
    get resultsList () { return $('.list-items') }
    get resultsListElements() { return $$('li .list-item')}  
    get resultsPagination () { return $('.list-pagination') }
    get resultsCurrentPage () { return $('//div[@class=\'list-pagination\']//button[contains(@class, \'next-current\')]') }

    /**
     * Overwrite open method to navigate to search page with iPhone value as searchText.
     * In the future the searchText value could be parametrized and passed from a config file
     */
    open(){
        return super.open(`wholesale?catId=0&SearchText=iPhone`);
    }

    /**
     * Navigates to a specific page number available in the pagination area at the bottom  
     * of the search results. 
     */
    navigateToSpecificPage (pageNumber) {
        this.resultsPagination.scrollIntoView();
        $(`//div[@class='list-pagination']//button[contains(text(), '${pageNumber}')]`).waitForEnabled(2000);
        $(`//div[@class='list-pagination']//button[contains(text(), '${pageNumber}')]`).click(); 
    }

    /**
     * Pass the number in which the item is placed starting to count from one onwards.
     * Each listed item has an attribute "product-index" which value starts from zero and continues to add 1
     * until the last listed item in the page. For another page, the product-index starts again.
     * 
     * This index is NOT the DOM element index. Getting elements by DOM index is a practice we firmly discourage.
     * @param {*} placeNumber 
     */
    getItemByListingPlace(placeNumber){
        placeNumber=placeNumber-1; //we will grab the item by the attr product-index which works as an array index (starting at 0)
        $(`//li[@class='list-item']//div[contains(@product-index, '${placeNumber}')]`).waitForDisplayed(2000);
        return $(`//li[@class='list-item']//div[contains(@product-index, '${placeNumber}')]`);
    }

    navigateToItem(item){
        item.waitForEnabled(2000);
        item.scrollIntoView();
        item.click();
    }
 
    navigateToItemByListingPlace(placeNumber){
        let item = this.getItemByListingPlace(--placeNumber);
        this.navigateToItem(item);
    }

}

module.exports = new SearchResults();
