import { test, expect } from '@playwright/test';
import { HomePage } from './pages/home.page';

let page
let homePage

test.describe('Home validations', () => {
    //test.describe.configure({ mode: 'serial' });
    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        homePage = new HomePage(page);
        await homePage.goTo()
    })

    test.afterAll(async () => {
        await page.close();
    });

    test('Go to Ripple home page and validate page title', async () => {
        await expect(page.getByRole('heading', { name: 'Power Your Maritime Business With Data-Driven Solutions' })).toBeVisible();
        await expect(page.getByText('Designed to make your business more Efficient, Safe and Secure.')).toBeVisible()
    });

    test('Go to The Suite page and validate page title', async () => {
        await homePage.clickOnLink('The Suite')
        await expect(page.getByRole('heading', { name: 'The Leading Maritime Compliance, Maintenance, & Crew Management Solutions' })).toBeVisible()
    });

    test('Go to Ripple Onboarding page and validate page title', async () => {
        await homePage.clickOnLink('Ripple Onboard')
        await expect(page.getByRole('heading', { name: 'The Most User-Friendly and Intelligent Onboard Application'})).toBeVisible()
    });

    test('Go to Compliace Product page and validate page title', async () => {
        await homePage.clickByButtonName('Products')
        await homePage.clickOnLink('Compliance')
        await expect(page.getByRole('heading', { name: 'Make Proving Compliance Simple'})).toBeVisible()
    });

    test('Go to Maintenance Product page and validate page title', async () => {
        await homePage.clickByButtonName('Products')
        await homePage.clickOnLink('Maintenance')
        await expect(page.getByRole('heading', { name: 'Reduce Downtime with AI Generated Maintenance Solutions'})).toBeVisible()
    });

    test('Go to Crew Management Product page and validate page title', async () => {
        await homePage.clickByButtonName('Products')
        await homePage.clickOnLink('Crew Management')
        await expect(page.getByRole('heading', { name: 'Crew Management Simplified'})).toBeVisible()        
    });

    test('Go to Mobile App Product page and validate page title', async () => {
        await homePage.clickByButtonName('Products')
        await homePage.clickOnLink('Mobile App')
        await expect(page.getByRole('heading', { name: 'Built to Meet Employees Where They\'re At'})).toBeVisible()
    });

    test('Go to Why Ripple page and validate page title', async () => {
        await homePage.clickOnLink('Why Ripple')
        await expect(page.getByRole('heading', { name: 'We Empower Your Vessels to Operate More Efficiently, Safely and Responsibly'})).toBeVisible()
    });

    test('Validate ripple home page menu options', async () => {
        const menu = page.locator('div[class="Box-cZshmE Flex-sc-r1kzye-0 dSKjrz isA-dXk"]')
        expect(await menu.screenshot()).toMatchSnapshot();
    });
    
})