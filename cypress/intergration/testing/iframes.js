///<reference types="cypress-iframe" />
describe('iframs', () => {
    it('test case fro iframes', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice")

        cy.frameLoaded('#courses-iframe');

        cy.iframe().contains('Job Support').click();
        cy.wait(2000)
    });
    
});
