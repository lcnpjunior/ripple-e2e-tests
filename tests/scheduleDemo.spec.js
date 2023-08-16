import { test, expect } from '@playwright/test';
import { HomePage } from './pages/home.page';
import { userInfo } from '../helpers/helpers';

let page
let homePage
let user

test.describe('Schedule Demo Flow', () => {
    test.describe.configure({ mode: 'serial' });
    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();        
        homePage = new HomePage(page);
        user = userInfo()
        await homePage.goTo()
        await homePage.clickOnLink('Schedule a Demo')            
    })

    test.afterAll(async () => {
        await page.close();
    });

    test('Validate empty fields', async ({ }) => {            
        await homePage.submitScheduleDemoForm()        
        await homePage.validateFormErrorMSg('Please complete all required fields.')        
    });


    test('Validate invalid email', async ({ }) => {
        await homePage.submitScheduleDemoForm(user.firstName, user.lastName, 'invalidEmail.com', user.company, user.website, user.interestedIn[1], user.optionalMessage)
        await homePage.validateEmailErrorMsg('Email must be formatted correctly.')        
    });

    test('Submit schedule demo form with success', async () => {
        await homePage.submitScheduleDemoForm(user.firstName, user.lastName, user.email, user.company, user.website, user.interestedIn[1], user.optionalMessage)        
        await homePage.validateSubmittedMessage('Thanks for submitting the form.')
    });

})
