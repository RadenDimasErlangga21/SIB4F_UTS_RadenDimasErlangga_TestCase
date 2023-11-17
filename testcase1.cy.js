describe('Register', () => {
  it('Register 01', () => {
    cy.visit('https://www.automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="signup-name"]').clear().type('Raden');
    cy.get('[data-qa="signup-email"]').clear().type('raden@gmail.com');
    cy.get('[data-qa="signup-button"]').click();
    cy.get('#id_gender1').check();
    cy.get('[data-qa="password"]').clear().type('12345');
    cy.get('[data-qa="days"]').select('26');
    cy.get('[data-qa="months"]').select('10');
    cy.get('[data-qa="years"]').select('1998');
    cy.get('#newsletter').check();
    cy.get('#optin').check();
    cy.get('[data-qa="first_name"]').clear().type('Raden');
    cy.get('[data-qa="last_name"]').clear().type('Erlangga');
    cy.get('[data-qa="company"]').clear().type('ASD');
    cy.get('[data-qa="address"]').clear().type('Tokyo');
    cy.get('[data-qa="address2"]').clear().type('Tokyo');
    cy.get('[data-qa="country"]').select('Singapore');
    cy.get('[data-qa="state"]').clear().type('Tokyo');
    cy.get('form > :nth-child(18)').click();
    cy.get('[data-qa="city"]').clear().type('Tokyo');
    cy.get('[data-qa="zipcode"]').clear().type('1235');
    cy.get('[data-qa="mobile_number"]').clear().type('2345678');
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="continue-button"]').click();
    cy.get('.shop-menu > .nav').click();
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
    cy.get('[data-qa="continue-button"]').click();
  })
})
