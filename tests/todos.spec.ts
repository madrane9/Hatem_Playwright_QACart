import {test, expect} from '@playwright/test';

test.describe("Todo page test cases", () => {
    test.beforeEach(async({page})=>{
        await page.goto("https://qacart-todo.herokuapp.com/login");
        await page.locator("#login").fill("test1234@test.de");
        await page.locator('//input[@data-testid="password"]').fill("Test123");
        await page.locator('button:has-text("Login")').click();

    });
test("should be able to mark a todo as completed", async({page})=>{
   
    await page.locator('[data-testid="add"]').click();
    await page.locator('[data-testid="new-todo"]').fill("Learn Playwright");
    await page.locator('[data-testid="submit-newTask"]').click();
    await page.locator('[data-testid="complete-task"]').nth(0).click();
    const todoItem = page.locator('[data-testid="todo-item"]').nth(0);
    await expect(todoItem).toHaveCSS("background-color", "rgb(33, 76, 97)");

});

test("welcome message should be diplayed", async( {page})=>{
    const welcomeMessage = page.locator('[data-testid="welcome]');
    await expect(welcomeMessage).toBeVisible();
});
});
