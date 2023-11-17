describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.automationexercise.com/');
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    cy.get('.brands-name > .nav > :nth-child(1) > a').click();
    cy.get('.brands-name > .nav > :nth-child(2) > a').click();
  });
});
