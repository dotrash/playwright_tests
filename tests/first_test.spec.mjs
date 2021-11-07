import { test, expect } from '@playwright/test';

test('Folderly UI check list', async ({ page }) => {
    await page.goto('https://app.folderly.com/sign-in');
    const title = page.locator('.sign-in__title');
    await expect(title).toHaveText('Log in');
});