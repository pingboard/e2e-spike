import orgChartPage from '../pages/orgChartPage';
import { admin } from '../data/roles';
const centerId = '108458'; // pam

fixture `Org Chart Modes`
    .beforeEach(async t => {
        await t.useRole(admin);
    });

    test('should default to edit mode when no url overrides present', async t => {
        await orgChartPage.goto();

        await t.expect(await orgChartPage.inEditMode()).ok();
    });

    test('sidebar=edit should open in edit mode', async t => {
        await orgChartPage.goto(`?center=${centerId}&sidebar=edit`);

        await t.expect(await orgChartPage.inEditMode()).ok();
    });

    test('sidebar=profile should open the given profile in view mode', async t => {
        await orgChartPage.goto(`?center=${centerId}&sidebar=profile`);

        await t.expect(await orgChartPage.inViewMode()).ok();
        await t.expect(orgChartPage.sidebarRight.visible).ok();
    });
