

describe('Login Sauce', () => {

    before(() => {
    
        cy.visit('https://demo.applitools.com/')
         
      })


    it('Login Standard User', () => {
        cy.get('#username')
        .should('have.attr', 'placeholder', 'Enter your username')
        .type('standard_user')

        cy.get('#password')
        .should('have.attr', 'placeholder', 'Enter your password')
        .type('secret_sauce')


        cy.xpath('//a[@id="log-in"]').click()
    })


})