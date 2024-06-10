describe('refresh_forward_backward', () => {
    it.only('refresh_forward_backward', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.contains('Free Access to InterviewQues/ResumeAssistance/Material').click()
        cy.wait(1000)
        cy.go("back")
        cy.url().should('include','AutomationPractice')
        cy.go('forward')
        cy.url().should('include','documents-request')
        cy.reload()

    });


    it('refresh_forward_backward1', () => {
        cy.visit("https://the-internet.herokuapp.com/login")
        //user name enter 
        cy.get("#username").type('tomsmith');
        //password to enter the 
        cy.get('#password').type('SuperSecretPassword!');
        //clcik the login button
        cy.get('.radius').click()
        //this for forword to go page
        cy.go('forward')
        //this backword to go page 
        cy.go('back')
        //this for relord page
        cy.reload()
    });
    
    
});
