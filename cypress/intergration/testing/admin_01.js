///<reference types="Cypress"/>
///<reference types='@cypress/xpath'/>
describe('admin_01', () => {
    it('admin', () => {
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
      cy.wait(2000)


      cy.get("//div[@id='ui-id-23']").type('United States')
      cy.get(".ui-menu-item-wrapper").each(($el,index,$list)=>{
  
          if($el.text()=='United States (USA)'){
              cy.wrap($el).click();
          }
      })



    });
    
});

