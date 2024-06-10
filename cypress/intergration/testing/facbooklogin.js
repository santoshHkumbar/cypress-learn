describe('test suit _facbook login -collction of test cases', () => {
    it('login_test', () => {
        //passing the url
        cy.visit('https://www.facebook.com/');
        
        // we have to enter the username 
        cy.get('#email').type('santosh');

          // we have to enter the password
          cy.get('#pass').type('audi123')


        
    });
});