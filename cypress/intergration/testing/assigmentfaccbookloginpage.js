///<reference types="Cypress"/>
///<reference types='@cypress/xpath'/>


describe('facebook login page', () => {
    it('login module for facebook', () => {
        cy.visit("https://www.facebook.com/")
        cy.xpath("(//a[@role='button'])[2]").click().should('have.text','Create new account')
    });
    
});
