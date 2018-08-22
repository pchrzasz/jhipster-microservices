import { element, by, ElementFinder } from 'protractor';

export class EntryComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    title = element.all(by.css('jhi-entry div h2#page-heading span')).first();

    async clickOnCreateButton() {
        await this.createButton.click();
    }

    async getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class EntryUpdatePage {
    pageTitle = element(by.id('jhi-entry-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    titleInput = element(by.id('field_title'));
    contentInput = element(by.id('field_content'));
    dateInput = element(by.id('field_date'));
    blogSelect = element(by.id('field_blog'));
    tagSelect = element(by.id('field_tag'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setTitleInput(title) {
        await this.titleInput.sendKeys(title);
    }

    async getTitleInput() {
        return this.titleInput.getAttribute('value');
    }

    async setContentInput(content) {
        await this.contentInput.sendKeys(content);
    }

    async getContentInput() {
        return this.contentInput.getAttribute('value');
    }

    async setDateInput(date) {
        await this.dateInput.sendKeys(date);
    }

    async getDateInput() {
        return this.dateInput.getAttribute('value');
    }

    async blogSelectLastOption() {
        await this.blogSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async blogSelectOption(option) {
        await this.blogSelect.sendKeys(option);
    }

    getBlogSelect(): ElementFinder {
        return this.blogSelect;
    }

    async getBlogSelectedOption() {
        return this.blogSelect.element(by.css('option:checked')).getText();
    }

    async tagSelectLastOption() {
        await this.tagSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async tagSelectOption(option) {
        await this.tagSelect.sendKeys(option);
    }

    getTagSelect(): ElementFinder {
        return this.tagSelect;
    }

    async getTagSelectedOption() {
        return this.tagSelect.element(by.css('option:checked')).getText();
    }

    async save() {
        await this.saveButton.click();
    }

    async cancel() {
        await this.cancelButton.click();
    }

    getSaveButton(): ElementFinder {
        return this.saveButton;
    }
}
