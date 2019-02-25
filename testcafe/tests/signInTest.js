import signInPage from '../pages/signInPage';
import homePage from '../pages/homePage';
import { admin } from '../data/roles';

fixture `Sign In`

    test('should sign in', async t => {
        await t.useRole(admin);

        await t.expect(homePage.userMenu.with({ visibilityCheck: true })).ok();
    });


