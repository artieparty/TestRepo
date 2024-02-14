import { test, expect } from '@playwright/test';
import { MainPage } from '../objects/MainPage';

test('Verify clicking button to navigate to new Finance page', async ({ page }) => {
    const mainPage = await MainPage.open(page);
    await expect(mainPage.tryNewPageButton).toBeVisible();
    await mainPage.clickTryNewPageButton();
    await expect(mainPage.tryOldPageButton).toContainText('Back to classic');
});

test('Verify navigating to Technology subpage from new Finance page', async ({ page }) => {
    const mainPage = await MainPage.open(page);
    await mainPage.clickTryNewPageButton();
    await mainPage.sectorTab.first().hover();
    await mainPage.technologySubTab.click();
    await expect(page.getByTestId("sector-header")).toContainText('Technology');
})