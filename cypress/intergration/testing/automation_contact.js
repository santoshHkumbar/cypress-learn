///<reference types="Cypress"/>
describe('testsuit', () => {
    it('first_testcase', () => {
        cy.visit('https://automationteststore.com/')
        cy.xpath("//a[@href='https://automationteststore.com/index.php?rt=content/contact']").click()
        cy.xpath("//input[@name='first_name']").type("santosh");
        cy.xpath("(//input[@name='email'])[1]").type("san@gamil.com");
        cy.xpath("//textarea[@name='enquiry']").type("i want to shoes");
        cy.xpath("//button[@title='Submit']").click()
        cy.wait(6000)
        cy.xpath("//*[contains(text(),'enquiry')]").should('have.text','Your enquiry has been successfully sent to the store owner!')
        
    });
});