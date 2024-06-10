class LoginPo{



visiturl(){
    cy.visit('https://the-internet.herokuapp.com/login')
}
login(){
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();

}

}
export default LoginPo;