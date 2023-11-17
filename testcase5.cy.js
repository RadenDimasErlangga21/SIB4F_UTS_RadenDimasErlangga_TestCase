describe('Register', () => {
  it('Register 01', () => {
    cy.visit('https://www.automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="signup-name"]').clear().type('Raden');
    cy.get('[data-qa="signup-email"]').clear().type('raden@gmail.com');
    cy.get('[data-qa="signup-button"]').click();

  })
})