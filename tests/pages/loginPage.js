import { expect } from '@playwright/test';

class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async login(userName, Password) {
          
    }


        // await page1.getByPlaceholder('Username').click();
        // await page1.getByPlaceholder('Password').click();
        // await page1.getByLabel('Remember My Login').check();
        // await page1.getByRole('button', { name: 'Cancel' }).click();
        // await page1.getByRole('heading', { name: 'Go to Home page' }).click();
        // await page1.getByRole('button', { name: 'Login' }).click();
        // await page1.getByText('The Username field is required.').click();
        // await page1.getByText('The Password field is required.').click();
        // await page1.close();

}

export { LoginPage }