import { Selector as $, t } from 'testcafe';
import BasePage from './basePage';

/**
 * search exists on multiple pages so we make it a module
 * that we can then require on multiple pages
 */
class SignInPage extends BasePage {
    constructor() {
        super();
        this.url        = `${this.baseUrl}sign_in`;
        this.signInForm = $('#new_user');
        this.signInEmail = $('#user_email');
        this.signInPassword = $('#user_password');
        this.signInBtn = $('#sign-in-button');
    }

    /**
     * sign into app
     * @param  {string} email
     * @param  {string} password
     * @return {promise}
     */
    async signIn(email, password) {
        await t
            .typeText(this.signInEmail, email)
            .typeText(this.signInPassword, password)
            .click(this.signInBtn);
    }

    /**
     * sign in via a passed role
     * @param  {object} userRole - a json object from data/users.js
     * @return {promise}
     */
    async signInAs(userRole) {
        await this.signIn(userRole.email, userRole.password);
    }
}
export default new SignInPage();