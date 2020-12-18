const Home = require('../pageobjects/home.page');
const SearchResults = require('../pageobjects/searchResults.page');

describe('Search for a product', () => {
    it('should display the results page for the searched product', () => {
        /// steps
        expect(SearchResults).toBeExisting();
        expect(SearchResults).toHaveTextContaining(
            'iPhone');
    });
    it('should display enabled pagination elements', () => {

    });
});


