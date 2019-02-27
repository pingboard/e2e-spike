import orgChartPage from '../pages/orgChartPage';
import { admin } from '../data/roles';

fixture `Org Chart Search`
    .beforeEach(async t => {
        await t.useRole(admin);
        await orgChartPage.goto();
    });

    test('should find results by user name', async t => {
        const existingUserName = 'Pam';
        await orgChartPage.searchFor(existingUserName);

        await t.expect(orgChartPage.firstName.withText(existingUserName)).ok();
    });

    test('should display no results message', async t => {
        const noResultsString = 'this should find nothing...';
        await orgChartPage.searchFor(noResultsString);

        await t.expect(orgChartPage.noResultsFound.visible).ok();
    });

/* TODO:
From Ryan:
The org chart search consumes the same `filter-combobox` code as several other comboboxes,
so whenever changes are made to the `filter-combobox` a number of components should to be checked
- Dashboard Group filter
- Org chart search
- Org chart select user to assign to role
- Org chart move user dropdown
- Org chart dotted line user dropdown
- Org chart department filter
- Collaborator Modal user select combobox
 */
