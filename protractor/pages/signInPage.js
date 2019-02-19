import BasePage from './basePage';

class SignInPage extends BasePage {
    constructor() {
        super();
        this.signInForm = $('#new_user');
        this.signInEmail = $('#user_email');
        this.signInPassword = $('#user_password');
        this.signInBtn = $('#sign-in-button');

        this.url = 'sign_in';
        this.pageLoaded = this.and(
            this.isVisible(this.signInForm)
        );
    }

    /**
     * sign into app
     * @param  {string} email
     * @param  {string} password
     * @return {promise}
     */
    async signIn(email, password) {
        await this.signInEmail.sendKeys(email);
        await this.signInPassword.sendKeys(password);
        await this.signInBtn.click();
    }

    async signInAs(userRole) {
        await this.signIn(userRole.email, userRole.password);
    }
}
export default new SignInPage();