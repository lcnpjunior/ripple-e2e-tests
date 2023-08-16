import { test, expect } from '@playwright/test';
import { HomePage } from './pages/home.page';
import { LoginPage } from './pages/login.page';

let page
let homePage
let loginPage
let newPagePromise
let newPage

test.describe('Login flow', () => {
    test.describe.configure({ mode: 'serial' });
    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        homePage = new HomePage(page);
        await homePage.goTo()

        newPagePromise = page.waitForEvent('popup');
        await page.getByRole('link', { name: 'Login' }).click();
        newPage = await newPagePromise;
        loginPage = new LoginPage(newPage);          
    })

    test.afterAll(async () => {
        await page.close();
    });

    test('Validate invalid user', async () => {
        await loginPage.login('userInvalid', '12333');
        await loginPage.validateInvalidUserErroMsg()
    });

    test('Validate empty field', async () => {
        await loginPage.login();
        await loginPage.validateRequiredFieldsErroMsg()
    });
})