describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.automationexercise.com/');
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#susbscribe_email').click();
    cy.get('#scrollUp > .fa').click();
    /* ==== End Cypress Studio ==== */
  })
})