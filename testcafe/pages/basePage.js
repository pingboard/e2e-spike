import { Selector as $, t } from 'testcafe';
import { ClientFunction } from 'testcafe';

export default class BasePage {
    constructor() {
        this.baseUrl = 'https://isis.pingboardbeta.com/';
    }

    /**
     * warper for navigateTo so we can use relative urls and append them to baseUrl
     * @param  {string} relativeUrl
     * @return {promise}
     */
    async goto(relativeUrl = null) {
        if(url) {
            // url is passed
            await t.navigateTo(url);
        } else {
            // get url from page object
            await t.navigateTo(this.url);
        }

    }

    /**
     * get the current browser url
     * @return {string}
     */
    async getUrl() {
        return await ClientFunction(() => window.location.href);
    }
}