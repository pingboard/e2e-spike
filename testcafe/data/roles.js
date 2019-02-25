import { Role } from 'testcafe';
import signInPage from '../pages/signInPage';

/**
 * Testcafe uses `Roles` to define user roles for logins that are triggered only _once_ per test file.
 * Thus they can be used in a `beforeEach` and they will only perform the login one time for all tests.
 *
 * https://devexpress.github.io/testcafe/documentation/test-api/authentication/user-roles.html
 *
 * To use in your test file...
 *
 * import { admin } from '../data/roles';
 * ...
 * .beforeEach(async t => {
 *      await t.useRole(admin);
 */

