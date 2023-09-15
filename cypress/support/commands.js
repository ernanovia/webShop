import loginPage from '../support/pageObject/loginPage'
import registerPage from '../support/pageObject/registerPage'
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('register', (firstname, lastname,email, password, confirmPass) => { 
    registerPage.selectGenderFemale()
    registerPage.inputFirstname(firstname)
    registerPage.inputLastname(lastname)
    registerPage.inputEmail(email)
    registerPage.inputPassword(password)
    registerPage.inputConfirmPassword(confirmPass)
    registerPage.clickRegistButton()
    registerPage.clickContinueButton()
})

Cypress.Commands.add('login', (email, password) => { 
    loginPage.clickLoginTextLink()
    loginPage.inputEmail(email)
    loginPage.inputPassword(password)
    loginPage.clickLoginButton()
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })