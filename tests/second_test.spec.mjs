import { test, expect } from '@playwright/test';

test('Folderly UI functional test', async ({ page }) => {
    await page.goto('https://app.folderly.com/sign-in');
    await page.waitForResponse(response => {
        return response.request().resourceType() === "xhr"
    })

    const notify_text = await page.locator('.notify__text');
    await page.fill('#email', "test@gmail.com");
    await page.fill('#password', "testjksfhkjhdsfhjdhjfhd");
    await page.click('button');
    await expect(notify_text).toHaveText('An unknown error occurred');
});