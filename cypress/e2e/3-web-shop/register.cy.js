const userr = require('../../fixtures/user.json')
import loginPage from '../../support/pageObject/registerPage'

describe('Quiz ke 2', () => {
  function generateRandomEmail() {
    const characters = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let email = '';
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      email += characters.charAt(randomIndex);
    }
    return `${email}@yopmail.com`; // Change the domain as needed
  }
  const email = generateRandomEmail();

  beforeEach(() => {
    cy.visit('https://demowebshop.tricentis.com/register')
  })

  it('firstname empty', () => {
    cy.fixture('user.json').then((user) => {
      const datauser = user.failedRegist[0];
      cy.register(datauser.firstName,datauser.lastName, email, datauser.password, datauser.confirmPass        )
      cy.contains('First name is required.')
    })
  })

  it('lastname empty', () => {
    cy.fixture('user.json').then((user) => {
      const datauser = user.failedRegist[1];
      cy.register(datauser.firstName,datauser.lastName, email, datauser.password, datauser.confirmPass        )
      cy.contains('Last name is required.')
    })
  })

  it('invalid email', () => {
    cy.fixture('user.json').then((user) => {
      const datauser = user.failedRegist[2];
      cy.register(datauser.firstName,datauser.lastName, datauser.email, datauser.password, datauser.confirmPass        )
      cy.contains('Wrong email')
    })
  })

  it('regist email', () => {
    cy.fixture('user.json').then((user) => {
      const datauser = user.failedRegist[3];
      cy.register(datauser.firstName,datauser.lastName, datauser.email, datauser.password, datauser.confirmPass        )
      cy.contains('The specified email already exists')
    })
  })

  it('pass < 6', () => {
    cy.fixture('user.json').then((user) => {
      const datauser = user.failedRegist[4];
      cy.register(datauser.firstName,datauser.lastName, email, datauser.password, datauser.confirmPass)
      cy.contains('The password should have at least 6 characters.')
    })
  })

  it('confirm pass not same', () => {
    cy.fixture('user.json').then((user) => {
      const datauser = user.failedRegist[5];
      cy.register(datauser.firstName,datauser.lastName, email, datauser.password, datauser.confirmPass)
      cy.contains('The password and confirmation password do not match.')
    })
  })

  it('success regisst', () => {
    cy.fixture('user.json').then((user) => {
      const datauser = user.successRegist[0];
      cy.register(datauser.firstName,datauser.lastName, email, datauser.password, datauser.confirmPass)

    })
  })
})