describe('test case for hr orm', () => {
    it('login', () => {
        //this for login 
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        //enter the username 
        cy.get("input[name='username']").type('Admin');
        //enter the passowrd
        cy.get("input[type='password']").type('admin123');
        //enter the login  useing class name 
        cy.get(".orangehrm-login-button").click()
        //useing the login button for diffrent class
       //cy.get("button[type='submit']").click()
    });

    it.skip('logout', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.xpath("//input[@name='username']").type('Admin');
        //enter the passowrd
        cy.xpath("//input[@type='password']").type('admin123');
        //enter the login  useing class name 
        cy.get(".orangehrm-login-button").click()

        cy.xpath("//span[@class='oxd-userdropdown-tab']").click()

        //cy.xpath("//ul[@class='oxd-dropdown-menu']")
        cy.xpath("//ul[@class='oxd-dropdown-menu']")
        
        //cy.xpath("//p[@class='oxd-userdropdown-name']")
        cy.xpath("//a[@href='/web/index.php/auth/logout']").click()
    });
});