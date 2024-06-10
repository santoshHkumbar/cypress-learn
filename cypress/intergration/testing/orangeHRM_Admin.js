describe('orangeHrm _admin page working', () => {
    it('adminpage _working', () => {
         //this for login 
         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
         //enter the username 
         cy.get("input[name='username']").type('Admin');
         //enter the passowrd
         cy.get("input[type='password']").type('admin123');
         //enter the login  useing class name 
         cy.get(".orangehrm-login-button").click()
        //enter the admin 
        cy.contains('Admin').click();
        //waiting
       // cy.wait(2000)

        
    
        //check th url
        //cy.url().should('include','Admin')

        //enter the usename in admin
        cy.xpath("(//input[@class='oxd-input oxd-input--active'])[2]").type('acpboss');

        //cy.wait(1000)
          
        //enter the  user role seelcting drop
        cy.xpath("(//div[@class='oxd-select-text-input'])[1]").click();
        
        
        cy.contains('ESS').click();
          

          cy.xpath("//input[@placeholder='Type for hints...']").type('Ravi')
          cy.xpath("//span[@data-v-08ed484c]").each(($el,index,$list)=>{
      
              if($el.text()=='Ravi M B'){
                  cy.wrap($el).click();
              }
          })



        //this for selected person enabled or disabled
        cy.xpath("(//div[@class='oxd-select-text-input'])[2]").click()
        cy.contains('Enabled').click()
          //waiting
         
            //search the 
          cy.xpath("//button[@type='submit']").click()
          cy.wait(1000)
    });


    
});
