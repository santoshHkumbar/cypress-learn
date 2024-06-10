///<reference types="Cypress"/>
///<reference types='@cypress/xpath'/>
describe('hide/show', () => {
    it('showing /hide', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //this for showig  for display text is visible
        cy.get("#displayed-text").type('cypress').should('be.visible')

        //this for hide the 
        cy.get("#hide-textbox").click()
        ////this for showig  for display text is not visible
        cy.get("#displayed-text").should('not.be.visible')
        //this for show ing clcik
        cy.get("#show-textbox").click()
        //this is agin  display the text
        cy.get("#displayed-text").type(' project').should('be.visible')
    });
    
});
