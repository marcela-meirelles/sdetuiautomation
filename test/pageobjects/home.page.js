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

    dismissAlert(){
        browser.dismissAlert();
    }

    getPopUpCloseBtn() { return $("img.rax-image") }
    
    closeCampaignPopUp(){
        browser.switchToFrame();
        browser.getPopUpCloseBtn().click();
    }

}

module.exports = new Home();
