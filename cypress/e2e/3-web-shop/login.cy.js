import loginPage from '../../support/pageObject/registerPage'
const userr = require('../../fixtures/user.json')

describe('Quiz ke 2', () => {

  // const registeredEmail = this.registeredEmail;
  const registeredEmail = 'ernasabecode@yopmail.com'
  beforeEach(() => {
    cy.visit('https://demowebshop.tricentis.com/register')
  })

  it('Failed Login - Empty data',()=> {
    cy.fixture('user.json').then((user) => {
      const datauser = user.failedLogin[0];
      cy.login(datauser.email,datauser.password)
      cy.contains('Login was unsuccessful. Please correct the errors and try again.')
      cy.contains('No customer account found')
    })
  })

  it('Failed login - Invalid Email', () => {
    cy.fixture('user.json').then((user) => {
      const datauser = user.failedLogin[1];
      cy.login(datauser.email, datauser.password)
      cy.contains('Please enter a valid email address.')
    })
  })

  it('Failed login - Email Unregistered', () => {
    cy.fixture('user.json').then((user) => {
      const datauser = user.failedLogin[2];
      cy.login(datauser.email, datauser.password)
      cy.contains('Login was unsuccessful. Please correct the errors and try again.')
      cy.contains('No customer account found')
    })
  })

  it('Failed login - Password is Wrong', () => {
    cy.fixture('user.json').then((user) => {
      const datauser = user.failedLogin[3];
      cy.login(datauser.email, datauser.password)
      cy.contains('The credentials provided are incorrect')
    })
  })

  it('Success Login', () => {
    cy.login(registeredEmail,'123456')
    cy.contains(registeredEmail)
  })
})