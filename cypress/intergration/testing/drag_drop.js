///<reference types="Cypress"/>
///<reference types='@cypress/xpath'/>
describe('drag and drop', () => {
    it('drag and drop -01', () => {
        cy.visit("https://v1.training-support.net/selenium/drag-drop")
        cy.get("#draggable").trigger("mousedown",{which:1})
        cy.get("#droppable").trigger("mousemove").trigger("mouseup",{force:true})
    });

    it('drag and drop -02', () => {
        cy.visit("https://v1.training-support.net/selenium/drag-drop")
        cy.get("#draggable").trigger("mousedown",{which:1})
        cy.get("#dropzone2").trigger("mousemove").trigger("mouseup",{force:true})
    });
    
});
