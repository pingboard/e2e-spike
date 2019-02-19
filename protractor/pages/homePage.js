import BasePage from './basePage';

class HomePage extends BasePage {
    constructor() {
        super();
        this.userMenu = $('#user-menu');

        this.url = 'home';
        this.pageLoaded = this.and(
            this.hasText(this.siteTitle, 'Home')
        );
    }
}
export default new HomePage();