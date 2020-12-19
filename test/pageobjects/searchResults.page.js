const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchResults extends Page {
    
    /**
     * define selectors using getter methods
     */
    get resultsList () { return $('.list-items') }
    get resultsListElements() { return $$('li .list-item')}  
    get resultsPagination () { return $('.list-pagination') }
    get resultsFirstPage () { return $('//div[@class=\'list-pagination\']//button[contains(@class, \'next-current\')]') }

    /**
     * overwrite open method to navigate to search page with iPhone value as searchText
     * in the future the searchText value could be parametrized and passed from a config file
     */
    open(){
        return super.open(`wholesale?catId=0&SearchText=iPhone`);
    }

    /**
     * navigates to a specific page number available in the pagination area at the bottom  
     * of the search results. The pageNumber needs to be enabled for the method to work
     */
    navigateToSpecificPage (pageNumber) {
        this.resultsPagination.scrollIntoView();
        $(`//div[@class='list-pagination']//button[contains(text(), '${pageNumber}')]`).waitForEnabled(2000);
        $(`//div[@class='list-pagination']//button[contains(text(), '${pageNumber}')]`).click(); 
    }
 
}

module.exports = new SearchResults();
