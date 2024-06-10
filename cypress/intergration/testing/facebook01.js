describe('test suit _facebook', () => {
    it('login', () => {
        //enter the url
        cy.visit('https://www.facebook.com/login/')

        //enter the username for useing class name 
        cy.get("input[name='email']").type('boss');

        //enter the password for useing password
        cy.get("input[id='pass']").type('a1234');

        //enter the login
        cy.get("#loginbutton").click()
        
    });
});