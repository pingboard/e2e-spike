import signInPage from '../pages/signInPage';
import orgChartPage from '../pages/orgChartPage';
import users from '../data/users';
const admin = users.admin;

describe('Org Chart Search', () =>  {
    beforeAll(async () => {
        await signInPage.goto();
        await signInPage.signInAs(admin);
        await orgChartPage.goto();
    });

    it('should find results by user name', async () => {
        const existingUserName = 'Pam Poovey';
        await orgChartPage.searchFor(existingUserName);

        expect(await orgChartPage.nameInResults(existingUserName)).toBe(true);
    });

    it('should display no results message', async () => {
        const noResultsString = 'this should find nothing...';
        await orgChartPage.searchFor(noResultsString);

        expect(await orgChartPage.noResultsFoundMsg.isDisplayed()).toBe(true);
    });
});

/*
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
