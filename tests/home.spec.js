// @ts-check
import { test, expect } from '@playwright/test';
import { HomePage } from './pages/homePage';
import { LoginPage } from './pages/loginPage';




test('Go to Ripple home page and validate page title', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goTo()
    await page.pause()
});

test('Validate ripple home page menu options', async ({ page }) => {

});

test('Go to The Suite page and validate page title', async ({ page }) => {

});

test('Go to Ripple Onboarding page and validate page title', async ({ page }) => {

});

test('Go to Compliace Product page and validate page title', async ({ page }) => {

});

test('Go to Compliace X page and validate page title', async ({ page }) => {

});

test('Go to Compliace Y page and validate page title', async ({ page }) => {

});

test('Go to Compliace  page and validate page title', async ({ page }) => {

});


