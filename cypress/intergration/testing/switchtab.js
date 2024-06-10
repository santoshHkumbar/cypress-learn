///<reference types="Cypress"/>
///<reference types='@cypress/xpath'/>
describe('switch the tab', () => {
    it('tab  switch-01', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("#opentab").invoke('removeAttr','target').click();
        cy.origin("https://www.qaclickacademy.com/",()=>{
            cy.contains("Access all our Courses").click()
            cy.log(cy.title())
        })
        cy.log(cy.title())
        
    });
    it.only('switch window', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("#openwindow").invoke('removeAttr','onclick').click();
        cy.origin("https://www.qaclickacademy.com/",()=>{
            cy.visit('/')
            cy.contains("Access all our Courses").click()
            cy.log(cy.title())
        })
        cy.log(cy.title())
    });
    
    
});
