import BasePage from './basePage';

class OrgChartPage extends BasePage {
    constructor() {
        super();
        // search...
        this.searchInput = $('#downshift-1-input');
        this.menuItems = $$('.menu__item');
        this.noResultsFoundMsg = $('.menu__item--disabled');

        // sidebar
        this.sidebarRight = $('aside.sidebar--right');
        this.firstNames = $$('.user-card__primary')

        this.nodes = $('#nodeContainer .node'); // all user nodes

        this.url = 'org_chart';
        this.pageLoaded = this.and(
            this.isVisible(this.searchInput)
        );
    }

    /**
     * search an org chart
     * @param  {string} text
     * @return {promise}
     */
    async searchFor(text) {
        await this.enterText(this.searchInput, text);
        return await browser.wait(this.isVisible(this.menuItems.first()), this.timeout.s, 'timeout: no search results found');
    }

    /**
     * test if a name is in search results
     * @param  {string} name
     * @return {bool}
     */
    async nameInResults(name) {
        return await this.firstNames.filter(elm => {
            return elm.getText().then(text => {
                return text === name;
            });
        }).then(found => {
            return found.length > 0;
        });
    }

    /**
     * wait for an element then click it
     * @param  {[type]} locator
     * @return {promise}
     */
    async waitAndClick(locator) {
        return await browser.wait(this.isClickable(locator)).then(async () => {
            return await locator.click();
        });
    }
}
export default new OrgChartPage();