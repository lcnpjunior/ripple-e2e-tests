import { expect } from '@playwright/test';

class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async clickLoginLink() {
        await this.page.click('text=Login'); 
        const newPage = await this.page.waitForEvent('popup');
        return new LoginPage(newPage);
    }
    
    async login(userName='', password='') {
        await this.page.getByPlaceholder('Username').fill(userName);
        await this.page.getByPlaceholder('Password').fill(password);
        await this.page.getByLabel('Remember My Login').check();                
        await this.page.getByRole('button', { name: 'Login' }).click();        
    }

    async validateRequiredFieldsErroMsg(){
        await expect(this.page.getByText('The Username field is required.')).toBeVisible()
        await expect(this.page.getByText('The Password field is required.')).toBeVisible()
    }

    async validateInvalidUserErroMsg(){
        await expect(this.page.getByText('Invalid username or password')).toBeVisible()        
    }
}

export { LoginPage }