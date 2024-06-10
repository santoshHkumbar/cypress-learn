///<reference types="Cypress"/>
///<reference types='@cypress/xpath'/>
describe('scolling page', () => {
    it.only('scoling page', () => {
        cy.visit("https://www.google.co.in/")
        //this for website enetring
        cy.xpath("//textarea[@title='Search']").type('masai{enter}')

        cy.wait(1000)
        //this for scolling down word
        cy.scrollTo(0,2000)
        //this waiting
        cy.wait(1000)
        //this for scolling upword
        cy.scrollTo(0,-2000)
        
        cy.contains("Masai School").scrollIntoView().click()
        cy.wait(2000)
      
        
    });
    
});
