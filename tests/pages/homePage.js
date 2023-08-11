import { expect } from '@playwright/test';

class HomePage {
    constructor(page) {
        this.page = page;
        // await page.getByRole('link', { name: 'The Suite', exact: true }).click();
        // await page.getByRole('link', { name: 'Ripple Onboard' }).click();
        // await page.getByRole('button', { name: 'Products' }).click();
        // await page.getByRole('link', { name: 'Compliance' }).click();
        // await page.getByRole('link', { name: 'Why Ripple' }).click();
        // await page.getByRole('link', { name: 'Schedule a Demo' }).click();
    }

    async goTo(url='/') {
        await this.page.goto(url);
    }

    async scheduleDemoSubmitForm() {
        // await page.frameLocator('iframe[title="Form 11"]').getByLabel('First Name*').click();
        // await page.frameLocator('iframe[title="Form 11"]').getByLabel('Last Name*').click();
        // await page.frameLocator('iframe[title="Form 11"]').getByLabel('Email*').click();
        // await page.frameLocator('iframe[title="Form 11"]').getByLabel('Company Name*').click();
        // await page.frameLocator('iframe[title="Form 11"]').getByLabel('Company Website URL*').click();                
        // await page.frameLocator('iframe[title="Form 11"]').getByLabel('Interested In').selectOption('Compliance');
        // await page.frameLocator('iframe[title="Form 11"]').getByLabel('Optional Message').click();
        // await page.frameLocator('iframe[title="Form 11"]').getByText('Please complete this required field.').first().click();
        // await page.frameLocator('iframe[title="Form 11"]').getByText('Please complete this required field.').nth(1).click();
        // await page.frameLocator('iframe[title="Form 11"]').getByText('Please complete this required field.').nth(2).click();
        // await page.frameLocator('iframe[title="Form 11"]').getByText('Please complete this required field.').nth(3).click();
        // await page.frameLocator('iframe[title="Form 11"]').getByText('Please complete this required field.').nth(4).click();
        // await page.frameLocator('iframe[title="Form 11"]').getByRole('button', { name: 'Submit' }).click();
        // await page.frameLocator('iframe[title="Form 11"]').getByText('Please complete all required fields.').click();
    }

}

export { HomePage }