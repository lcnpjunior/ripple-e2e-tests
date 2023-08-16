import { expect } from '@playwright/test';

class HomePage {
    constructor(page) {
        this.page = page;
        this.formFrame = page.frameLocator('iframe[class="hs-form-iframe"]').first()
        this.firstNameInput = this.formFrame.locator('input[name="firstname"]')
        this.lastNameInput = this.formFrame.locator('input[name="lastname"]')
        this.emailInput = this.formFrame.locator('input[name="email"]')
        this.companyInput = this.formFrame.locator('input[name="company"]')
        this.websiteInput = this.formFrame.locator('input[name="0-2/website"]')
        this.interestedInSelect = this.formFrame.locator('select[name="0-2/interested_in"]')
        this.optionalMessageTextArea = this.formFrame.locator('textarea[name="message"]')
        this.submitButton = this.formFrame.locator('input[type="submit"]')
    }

    async goTo(url='/') { 
        await this.page.goto(url);
    }

    async clickOnLink(linkName) {
        const button = await this.page.getByRole('link', { name: linkName, exact: true })
        await button.waitFor({ state: "visible" })
        await button.click()
    }

    async clickByButtonName(buttonName) {
        const button = await this.page.getByRole('button', { name: buttonName })
        await button.waitFor({ state: "visible" })
        await button.click()
    }

    async submitScheduleDemoForm(firstName='', lastName='', email='', companyName='', companyWebsite='', interestedIn='', optionalMessage='') {        
        await this.firstNameInput.fill(firstName)
        await this.lastNameInput.fill(lastName)
        await this.emailInput.fill(email)
        await this.companyInput.fill(companyName)
        await this.websiteInput.fill(companyWebsite)
        await this.interestedInSelect.selectOption(interestedIn)
        await this.optionalMessageTextArea.fill(optionalMessage)
        await this.submitButton.click()
    }

    async validateFormErrorMSg(msg){
        await expect(this.formFrame.locator('div[class="hs_error_rollup"]')).toContainText(msg);        
    }

    async validateEmailErrorMsg(msg){
        await expect(this.formFrame.locator('div[class*="hs_email hs-emai"]')).toContainText(msg);        
    }

    async validateSubmittedMessage(msg){                         
        await expect(this.formFrame.locator('div[class*="submitted-message"]')).toContainText(msg);
    }
}

export { HomePage }