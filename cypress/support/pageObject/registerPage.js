class registerPage{
    maleRadioButton = '#gender-male'
    femaleRadioButton = '#gender-female'
    firstNameField = '#FirstName'
    lastNameField =  '#LastName'
    emailField = '#Email'
    passField = '#Password'
    confirmPass = '#ConfirmPassword'
    registerButton = '#register-button'
    continueButton = '.page-body > .buttons > .button-1'

    selectGenderMale(){
        cy.get(this.maleRadioButton).click()
    }
    selectGenderFemale(){
        cy.get(this.femaleRadioButton).click()
    }
    inputFirstname(firstname){
        cy.get(this.firstNameField).type(firstname)
    }
    inputLastname(lastname){
        cy.get(this.lastNameField).type(lastname)
    }
    inputEmail(email){
        cy.get(this.emailField).type(email)
        cy.get(this.emailField).invoke('val').as('registeredEmail')
    }
    inputPassword(password){
        cy.get(this.passField).type(password)
    }
    inputConfirmPassword(confirmPass){
        cy.get(this.confirmPass).type(confirmPass)
    }
    clickRegistButton(){
        cy.get(this.registerButton).click()
    }
    clickContinueButton(){
        // cy.contains('Your registration completed')
        cy.get(this.continueButton).click()
    }
    
}

export default new registerPage()