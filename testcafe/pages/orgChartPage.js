import { Selector as $, t } from 'testcafe';
import BasePage from './basePage';

class OrgChartPage extends BasePage {
    constructor() {
        super();
        this.url = `${this.baseUrl}org_chart`;

        // search...
        // TODO: make this a module
        this.searchInput = $('#downshift-1-input');
        this.menuItems = $('.menu__item');
        this.noResultsFound = $('.menu__item--disabled');

        // sidebar
        this.sidebarRight = $('aside.sidebar--right');
        this.firstName = $('.js-first-name')

        this.nodes = $('#nodeContainer .node'); // all user nodes
    }

    /**
     * search an org chart
     * @param  {string} text
     * @return {promise}
     */
    async searchFor(text) {
        await t.typeText(this.searchInput, text)
    }
}
export default new OrgChartPage();