const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchResults extends Page {
    /**
     * define selectors using getter methods
     */
    get resultsTable () { return $('#####') }
    get resultsPageNumber () { return $('####') }
    get resultsPagination () { return $('#####') }
    // get btnNavToPageN (pageNumber) { return $('button[type="submit"]') }

    /**
     * a method to encapsule automation code to interact with this page object
     * 
     */
    navigateToSpecificPage (pageNumber) {
        this.btnNavToPageN(pageNumber).click(); 
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

module.exports = new SearchResults();
