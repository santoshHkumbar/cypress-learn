///<reference types="Cypress"/>
///<reference types='@cypress/xpath'/>
describe('orange hrm login_admin_logout', () => {
    
it('login', () => {
    //visting the website 
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //enter the username
    cy.get("input[name='username']").type('Admin')
    //enter the password
    cy.get("input[type='password']").type('admin123')
    //login 
    cy.get(".orangehrm-login-button").click()
    //wait method
    cy.wait(1000)
    //naviagtion to the admin module
    cy.contains('Admin').click() 
    //Enter username as 'abcdy'
    cy.xpath("(//input[@class='oxd-input oxd-input--active'])[2]").type('abcdy');
    //Set user role dropdown to 'Admin'.
    cy.xpath("(//div[@class='oxd-select-text-input'])[1]").click();
    //select the admin in drop down
    cy.xpath("(//span[@data-v-13cf171c])[1]").click();
    //In the Employee name dropdown, select 'Ranga Akunuri'.
    cy.xpath("//input[@placeholder='Type for hints...']").type('Ran');
    cy.xpath("(//span[@data-v-08ed484c])[1]").click();
    //Select status as 'Enabled'.
    cy.xpath("(//div[@class='oxd-select-text-input'])[2]").click();
    //select the enabled
    cy.contains('Enabled').click();
    //Click on 'Search'.
    cy.xpath("//button[@type='submit']").click();
    //wait
    cy.wait(2000)
    //Refresh the page.
    cy.reload();
    //Fetch the Employee name 'James Butler' from the web table.
    cy.xpath("//input[@placeholder='Type for hints...']").type('James');
    //select the james butler 
    cy.xpath("//span[@data-v-08ed484c]").click();
    //Check the status of 'James Butler' to see if it is 'Enabled'.
    cy.xpath("(//div[@class='oxd-select-text-input'])[2]").click();
    //select the enabled
    cy.contains('Enabled').click();
     //Click on 'Search'.
     cy.xpath("//button[@type='submit']").click();
     //wait 
     cy.wait(1000)
     //logout
     cy.xpath("//span[@class='oxd-userdropdown-tab']").click();
     //dropdown for logout
     cy.xpath("//ul[@class='oxd-dropdown-menu']")
     //logout the website
     cy.xpath("(//a[@class='oxd-userdropdown-link'])[4]").click();

});



});
