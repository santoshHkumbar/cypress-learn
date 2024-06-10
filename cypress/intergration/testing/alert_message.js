///<reference types="Cypress"/>
///<reference types='@cypress/xpath'/>
describe('alert message ', () => {
    it('alert meassge for ', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#alertbtn').click()
        cy.on("window:alert",(msg)=>{
            expect(msg).to.eq('Hello , share this practice page and share your knowledge')
            return true;

        })
        
    });
    it.only('windown_confirm', () => {
        //click on confirm alert /popups
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#confirmbtn').click()
        cy.on("window:confirm",(msg1)=>{
            expect(msg1).to.eq('Hello , Are you sure you want to confirm?')
            return false;
        })
        
    });
    
    
});
