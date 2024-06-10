describe('test suit', () => {
    before(()=>{
     cy.fixture('example').then((data)=>{
        globalThis.data=data;
     })
    })



    it('login page ', () => {
        cy.visit("https://the-internet.herokuapp.com/login")
        cy.get("#username").type(data.username);
        cy.get('#password').type(data.password);
        cy.get('.radius').click()
    });
});