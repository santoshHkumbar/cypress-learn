///<reference types="Cypress"/>
describe('testsuit', () => {
    it.skip('first_testcase', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //cy.get("#checkBoxOption1").check().should('have.value','Option1').and('have.attr','name','checkBoxOption1')
        cy.get("#checkBoxOption2").check().should('have.value','option2')
        //cy.get("#checkBoxOption3").check().should('have.value','Option3').and('have.attr','type','checkbox')
        
    });
});

it.only('mutiple check list ', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get("input[type='checkbox']").check(['option1','option2','option3']).should('be.checked')
    cy.wait(4000)
    cy.get("input[type='checkbox']").uncheck(['option1','option2','option3']).should('not.be.checked')
    //cy.get("input[type='checkbox']").check('option3')
    //cy.get("input[type='checkbox']").uncheck('option3')
});


it.skip('radio button', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
   // cy.get("[value='radio1']").check().should('be.checked')
    cy.get("[value='radio2']").check().should('be.checked').and('have.value','radio2')
    //cy.get("[value='radio3']").check().should('be.checked')
    cy.wait(2000)
    //cy.get("[value='radio1']").uncheck().should('not.be.checked')
    //cy.get("[value='radio2']").uncheck().should('not.be.checked')
    //.get("[value='radio3']").uncheck().should('not.be.checked')
}


);

it('dropdown---', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get("#dropdown-class-example").select('option2').should('have.value','option2')
    cy.get("#dropdown-class-example").select('option1').should('have.value','option1')
    cy.get("#dropdown-class-example").select('option3').should('have.value','option3')
});


it('select by index', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get("#dropdown-class-example").select(3).should('have.value','option3')
    cy.get("#dropdown-class-example").select(2).should('have.value','option2')
    cy.get("#dropdown-class-example").select(1).should('have.value','option1')
    cy.get("#dropdown-class-example").select(0).should('have.value','')
    
});

it('select by text', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get("#dropdown-class-example").select('option3').should('have.value','option3')
    cy.get("#dropdown-class-example").select('option2').should('have.value','option2')
    cy.get("#dropdown-class-example").select('option1').should('have.value','option1')
    cy.get("#dropdown-class-example").select('Select').should('have.value','')
    
});

it('dynamic dropdown', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    //cy.get(".ui-autocomplete-input").type('United States')
    cy.get("//div[@id='ui-id-23']").type('United States')
    cy.get(".ui-menu-item-wrapper").each(($el,index,$list)=>{

        if($el.text()=='United States (USA)'){
            cy.wrap($el).click();
        }
    })
});



