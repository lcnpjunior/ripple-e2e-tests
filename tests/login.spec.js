// @ts-check
import { test, expect } from '@playwright/test';
import { HomePage } from './pages/homePage';
import { LoginPage } from './pages/loginPage';

let page
let loginPage
let newPagePromise
let newPage

test.describe('Login Flow', async ({}) => {

    test.beforeEach(async () => {
        newPagePromise = page.waitForEvent('popup');
        await page.getByRole('link', { name: 'Login' }).click();
        newPage = await newPagePromise;
        loginPage = new LoginPage(newPage);     
    })


    test('Validate invalid user', async ({ }) => {
        loginPage
    });

    test('Validate empty field', async ({ }) => {
    
    });

})
