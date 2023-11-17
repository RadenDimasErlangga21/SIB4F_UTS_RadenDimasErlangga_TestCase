describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.automationexercise.com/');
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    cy.get('#search_product').clear().type('Blue Top');
    cy.get('#submit_search').click();
  });
});
