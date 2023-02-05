import{chromium, expect} from '@playwright/test';
async function globalConfig() {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto("https://qacart-todo.herokuapp.com/login");
    await page.locator("#login").fill("test1234@test.de");
    await page.locator('//input[@data-testid="password"]').fill("Test123");
    await page.locator('button:has-text("Login")').click();
    const welcomeMEssage = page.locator('[data-testid="welcome"]');
    await expect(welcomeMEssage).toBeVisible();
    await page.context().storageState({ path: 'storageState.json' })}
  

export default globalConfig;