import signInPage from '../pages/signInPage';
import homePage from '../pages/homePage';
import users from '../data/users';
const admin = users.admin;

fixture `Sign In`
    // the starting page... this will open the page with the provided url
    .page `${signInPage.url}`

    test('should sign in', async t => {
        await signInPage.signIn(admin.email, admin.password);

        await t.expect(homePage.userMenu.with({ visibilityCheck: true })).ok();
    });


