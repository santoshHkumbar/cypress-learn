import LoginPo from  "../../support/pageobjectmodel/loginpo"


describe('heroku test', () => {
    const login =new LoginPo();
    it('login', () => {
        login.visiturl();
        login.login();
    });
    
});
