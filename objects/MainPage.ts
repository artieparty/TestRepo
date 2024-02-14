import { Page } from '@playwright/test';

const MainPageURL = "https://finance.yahoo.com/go-back?.done=https%3A%2F%2Ffinance.yahoo.com%2F"


export function MainPage(page: Page) {
    return {
        tryNewPageButton: page.getByLabel('Try the new Yahoo Finance'),
        tryOldPageButton: page.locator ('.rapid-noclick-resp.opt-in-link'),
        sectorTab: page.getByRole('link', { name: 'Sectors' }),
        technologySubTab: page.getByRole('link', { name: 'Technology' }),

        async clickTryNewPageButton() {
            await this.tryNewPageButton.click();
        },
        async clickSectorTab() {
            await this.sectorTab.first().click();
        },
        async clickTechnologySubTab() {
            await this.technologySubTab.click();
        }
    }
}

MainPage.open = async function(page: Page) {
    await page.goto(MainPageURL);
    return MainPage(page);
}