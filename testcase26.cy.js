describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.automationexercise.com/');
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#susbscribe_email').click();
    cy.get('#slider').click();
    /* ==== End Cypress Studio ==== */
  })
})