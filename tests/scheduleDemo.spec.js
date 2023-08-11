// @ts-check
import { test, expect } from '@playwright/test';
import { HomePage } from './pages/homePage';
import { LoginPage } from './pages/loginPage';

let page
let homePage


test.describe('Schedule Demo Flow', async ({}) => {

    test.beforeEach(async () => {
        homePage = new HomePage(page);
        await homePage.goTo()
    })

    test('Submit schedule demo form with success', async ({ }) => {
    
    });

    test('Validate empty fields', async ({ }) => {

    });

    test('Validate invalid email', async ({ }) => {
    
    });

})
