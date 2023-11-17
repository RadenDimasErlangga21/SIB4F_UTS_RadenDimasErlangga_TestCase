describe('template spec', () => {
  it('passes', () => {
    // cy.visit('https://example.cypress.io') // Disabled for now
    cy.visit('https://www.automationexercise.com/');
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
  });
});
