///<reference types="Cypress"/>
///<reference types='@cypress/xpath'/>
describe('signup page', () => {
    it('testcase facebook signp', () => {
        cy.visit("https://www.facebook.com/reg/?next=%2Fsigup%2F")
        cy.wait(1000)
    });
    
});
