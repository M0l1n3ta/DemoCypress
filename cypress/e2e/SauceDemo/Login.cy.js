

describe('Login Sauce', () => {

    before(() => {
    
        cy.clearAllCookies()
        cy.intercept('/api/unique-events/**', req => req.reply({
            statusCode: 201,
            body: {
            name: 'Peter Pan'
            }
        }) ) 
        cy.intercept('/api/summed-events/**', req => req.reply({}) ) 
        cy.visit('https://www.saucedemo.com/')
        
        
        
      })


    it('Login Standard User', () => {
        cy.get('#user-name')
        .should('have.attr', 'placeholder', 'Username')
        .type('standard_user')

        cy.get('#password')
        .should('have.attr', 'placeholder', 'Password')
        .type('secret_sauce')

        cy.get('#login-button')
        .should('have.attr', 'data-test', 'login-button')
        .click()
    })


    it('Login Problem User', () => {


        cy.get('#user-name')
        .should('have.attr', 'placeholder', 'Username')
        .type('problem_user')

        cy.get('#password')
        .should('have.attr', 'placeholder', 'Password')
        .type('secret_sauce')

        cy.get('#login-button')
        .should('have.attr', 'data-test', 'login-button')
        .click()
    })


})