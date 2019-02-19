import signInPage from '../pages/signInPage';
import homePage from '../pages/homePage';
import users from '../data/users';
const admin = users.admin;

describe('Sign In', () =>  {
    beforeAll(async () =>  {
        await signInPage.goto();
    });

    it('should sign in', async () => {
        await signInPage.signIn(admin.email, admin.password);

        expect(await homePage.userMenu.isDisplayed()).toBe(true);
    });
});