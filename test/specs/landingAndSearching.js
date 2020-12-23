const Home = require('../pageobjects/home.page');
const SearchResults = require('../pageobjects/searchResults.page');
const ItemPage = require('../pageobjects/item.page');

describe('Search for a product', () => {
    it('should display the results page for the searched product', () => {
        Home.open();
        Home.searchProduct('iPhone');
        SearchResults.closeCampaignPopUp();
        SearchResults.resultsList.waitForEnabled(2000);
        expect(SearchResults.resultsList).toBeExisting();
        expect(SearchResults.resultsList).toHaveTextContaining('iPhone');       
        expect(SearchResults.resultsPagination).toBeExisting(); 
        SearchResults.resultsPagination.scrollIntoView();
        expect(SearchResults.resultsCurrentPage).toBeDisplayed(); 
        expect(SearchResults.resultsCurrentPage).toHaveTextContaining('1'); 
    });
    it('should allow navigation to a different results page', () => {
        SearchResults.open();
        SearchResults.closeCampaignPopUp();
        SearchResults.navigateToSpecificPage('2');
        expect(SearchResults.resultsCurrentPage).toHaveTextContaining('2');
    });
    it('should navigate to selected item and verify there is at least one item to be bought', () => {
        SearchResults.open();
        SearchResults.closeCampaignPopUp();      
        SearchResults.navigateToSpecificPage('2');
        SearchResults.navigateToItem(SearchResults.getItemByListingPlace('2'));
        browser.switchToWindow(browser.getWindowHandles()[1]);
        expect(ItemPage.getItemsQuantity() > 0).toBe(true);
    });
});
