import { Selector as $, t } from 'testcafe';
import BasePage from './basePage';

class OrgChartPage extends BasePage {
    constructor() {
        super();
        this.url = `${this.baseUrl}/org_chart`;

        // search...
        // TODO: make this a module
        this.searchInput = $('#downshift-1-input');
        this.menuItems = $('.menu__item');
        this.noResultsFound = $('.menu__item--disabled');

        // toolbar
        this.editBtn = $('span').withExactText('Edit');
        this.viewBtn = $('span').withExactText('View');

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

    /**
     * are we in edit mode
     * @return {bool}
     *
     * sadness: react's randomness forces us to check the color of the mode toggles
     * to test which mode we're in
     */
    async inEditMode() {
        return await this.editBtn.getStyleProperty('color') === 'rgb(249, 118, 52)';
    }

    /**
     * are we in view mode
     * @return {bool}
     */
    async inViewMode() {
        return await this.viewBtn.getStyleProperty('color') === 'rgb(37, 163, 254)';
    }
}
export default new OrgChartPage();