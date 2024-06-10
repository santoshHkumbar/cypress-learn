describe('webtables', () => {
    it('webtables', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.xpath("//table[@class='table-display']/tbody/tr[9]/td[2]")
        .should('have.text','Master Selenium Automation in simple Python Language')
        cy.wait(2000)
        //cy.xpath("//table[@class='table-display']/tbody/tr[7]/td[2]")
        //cy.wait(2000)
    });
    
    it('webtable2', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.xpath("//div[@class='tableFixHead']/table/tbody/tr[8]/td[1]").should('have.text','Ronaldo')
        //cy.xpath("//div[@class='tableFixHead']/table/tbody/tr[3]/td[1]")
    });

    it.only('webtable 3', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.xpath("//table[@class='table-display']/tbody/tr[4]/td[2]").each(($el,index,$limit)=>{
            let text1 =$el.text()
            if(text1.includes('Selenium')){
                cy.wrap($el).next().then((price)=>{
                    cy.log(price.text())
                })
            }
        })
    });


    it('webtable 4', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.xpath("//div[@class='tableFixHead']/table/tbody/tr[8]/td[1]").each(($el,index,$limit)=>{
            let text =$el.text()
            if(text.includes('Ronaldo')){
                cy.wrap($el).next().then((Position)=>{
                    cy.log(Position.text())
                })
            }
        })
    });
    
    
});
