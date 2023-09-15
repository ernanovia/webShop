class loginPage{
    loginTextLink = '.ico-login'
    logoutTextLink = '.ico-logout'
    emailFielf = '#Email'
    passField = '#Password'
    loginButton = '[value="Log in"]'

    clickLoginTextLink(){
        cy.get(this.loginTextLink).click()
    }
    inputEmail(email){
        cy.get(this.emailFielf).type(email)
    }
    inputPassword(password){
        cy.get(this.passField).type(password)
    }
    clickLoginButton(){
        cy.get(this.loginButton).click()
    }
    
}

export default new loginPage()