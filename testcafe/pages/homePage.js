import { Selector as $, t } from 'testcafe';
import BasePage from './basePage';

class HomePage extends BasePage {
    constructor() {
        super();
        this.url = `${this.baseUrl}home`;
        this.userMenu = $('#user-menu');
    }
}
export default new HomePage();