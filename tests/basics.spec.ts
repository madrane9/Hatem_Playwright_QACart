import {test, expect} from '@playwright/test';


test.describe("Login test cases", () => {
    test("should have the correct title", async ({ page })=> {
    // Open the Website https://qacart-todo.herokuapp.com/   test@playwright.de   Playwright1
        await page.goto("https://qacart-todo.herokuapp.com");
        await expect(page).toHaveTitle("QAcart Todo App - Login page");
});
    
    // var can we change it but const we can't change it later
    // const title = await page.title()
    // console.log(title)

    test("should have the correct URL link", async ({ page })=> {
        await page.goto("https://qacart-todo.herokuapp.com/login");
        await expect(page).toHaveURL("https://qacart-todo.herokuapp.com/login");
        
});

    test("header should be visible by text", async ({ page })=> {
        await page.goto("https://qacart-todo.herokuapp.com/login");
        const header = page.locator('text=login to Application');
        await expect(header).toBeVisible();

});
    test("header should contain the correct text", async ({ page })=> {
        await page.goto("https://qacart-todo.herokuapp.com/login");
        const header = page.locator(".header");
        await expect(header).toHaveText("Login to Application");

    });

    test("I should be able to fill in", async ({ page })=> {
        await page.goto("https://qacart-todo.herokuapp.com/login");
        const emailField = page.locator("#login");
        await emailField.fill("test1234@test.de");
        await expect(emailField).toHaveValue("test123@test.de");

    });

    test("I should be able to fill the password by css", async ({ page })=> {
        await page.goto("https://qacart-todo.herokuapp.com/login");
        const passwordField = page.locator('[data-testid="password"]');
        await passwordField.fill("Test123");
        await expect(passwordField).toHaveValue("Test123");

    })

    //Xpath //tagName[@attribute="value"]
    test("I should be able to fill the password by xpath", async ({ page })=> {
        await page.goto("https://qacart-todo.herokuapp.com/login");
        const passwordField = page.locator('//input[@data-testid="password"]');
        await passwordField.fill("Test123");
        await expect(passwordField).toHaveValue("Test123");

    })

    test("I should be able to click on the submit button", async ({ page })=> {
        await page.goto("https://qacart-todo.herokuapp.com/login");
        await page.locator("#login").fill("test1234@test.de");
        await page.locator('//input[@data-testid="password"]').fill("Test123");
        const submitButton = page.locator('button:has-text("Login")');
        await submitButton.click();
        await expect(page).toHaveTitle("QAcart Todo App - Login page",{timeout: 60000} );
     

    })
});