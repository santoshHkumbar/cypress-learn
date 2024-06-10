///<reference types="Cypress"/>
describe('testsuit', () => {
    it('first_testcase', () => {
        cy.visit('https://automationteststore.com/')
        //cy.xpath("//input[@type='text' and @name='filter_keyword'] ")
        cy.xpath("(//a[contains(text(),'Skinsheen Bronzer Stick')])[1]").click()
        
    });
});