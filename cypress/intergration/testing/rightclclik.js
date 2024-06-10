///<reference types="Cypress"/>
///<reference types='@cypress/xpath'/>
describe('right clcik', () => {
    it('right clcik', () => {
        cy.visit("https://demo.guru99.com/test/simple_context_menu.html")
        //this for right clck
        cy.xpath("//span[@class='context-menu-one btn btn-neutral']").rightclick()
    });

    it('double clcik', () => {
        cy.visit("https://demo.guru99.com/test/simple_context_menu.html")
        //thsi for double clcik
        cy.xpath("//button").dblclick()
    });
    
});
