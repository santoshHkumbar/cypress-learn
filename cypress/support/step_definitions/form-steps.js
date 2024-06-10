import { Before,Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";

Given('user open the simple form url',()=>{
     //CYPRESS CODE
     cy.visit("https://v1.training-support.net/selenium/simple-form")
})

When('user enter the  First Name ,last Name ,email, contact number ,message',()=>{
      cy.get("#firstName").type('santosh')
      cy.get("#lastName").type('kumbar')
      cy.get("#email").type('santu@gmail.com')
      cy.get("#number").type('7411849065')
      cy.xpath("//textarea[@rows='2']").type("welcome to masai")
})

And(' click on  sumbit button',()=>{
    
    cy.xpath("//input[@type='submit']").click()
})

Then('user should get the pop message ',()=>{
    cy.on("window:alert",(msg)=>{
        expect(msg).to.eq('Thank You for reaching out to us, santosh kumbar')
        return true;
    })
})