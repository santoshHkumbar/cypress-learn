///<reference types="Cypress"/>
///<reference types='@cypress/xpath'/>
describe('mouse action', () => {
    it('mouse action 01', () => {
        //visiting the website 
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //invoke use for the showing list
        cy.get("#mousehover").invoke('show')
        //selecting list in 
        cy.contains('Reload').click({force:false})
        //check the url in side the top word is there or not
        cy.url().should('include','reload')
    });

    it('mouse action 02', () => {
         //visiting the website
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
         //invoke use for the showing list
        cy.get("#mousehover").invoke('show')
         //selecting list in 
        cy.contains('Top').click({force:true})
        //check the url in side the top word is there or not
        cy.url().should('include','top')
    });



    it('mouse action 03', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //this is basic trigger the mouseover action
        cy.get("#mousehover").trigger("mouseover")
         //selecting list in ('top or reload')
        cy.contains('Top').click({force:true})
            //check the url in side the top word is there or not
        cy.url().should('include','top')
    });
    
});
