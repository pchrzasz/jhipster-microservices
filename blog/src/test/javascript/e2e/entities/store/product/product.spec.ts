import { browser, ExpectedConditions as ec } from 'protractor';
import { NavBarPage, SignInPage } from '../../../page-objects/jhi-page-objects';

import { ProductComponentsPage, ProductUpdatePage } from './product.page-object';

describe('Product e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let productUpdatePage: ProductUpdatePage;
    let productComponentsPage: ProductComponentsPage;

    beforeAll(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.autoSignInUsing('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load Products', async () => {
        await navBarPage.goToEntity('product');
        productComponentsPage = new ProductComponentsPage();
        expect(await productComponentsPage.getTitle()).toMatch(/blogApp.storeProduct.home.title/);
    });

    it('should load create Product page', async () => {
        await productComponentsPage.clickOnCreateButton();
        productUpdatePage = new ProductUpdatePage();
        expect(await productUpdatePage.getPageTitle()).toMatch(/blogApp.storeProduct.home.createOrEditLabel/);
        await productUpdatePage.cancel();
    });

    it('should create and save Products', async () => {
        await productComponentsPage.clickOnCreateButton();
        await productUpdatePage.setNameInput('name');
        expect(await productUpdatePage.getNameInput()).toMatch('name');
        await productUpdatePage.setPriceInput('5');
        expect(await productUpdatePage.getPriceInput()).toMatch('5');
        await productUpdatePage.save();
        expect(await productUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(async () => {
        await navBarPage.autoSignOut();
    });
});
