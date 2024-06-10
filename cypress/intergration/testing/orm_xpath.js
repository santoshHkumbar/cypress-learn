///<reference types='@cypress/xpath'/>
describe('test case for hr orm', () => {
    it('login', () => {
        //this for login 
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        //enter the username 
        cy.xpath("//input[@name='username']").type('Admin');
        //enter the passowrd
        cy.xpath("//input[@type='password']").type('admin123');
        //enter the login  useing class name 
        cy.get(".orangehrm-login-button").click()

        //enter the admin 
        cy.contains('Admin').click();
        //cy.contains('PIM').click();
        
    });
});