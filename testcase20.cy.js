describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.automationexercise.com/');
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    cy.get('#search_product').clear().type('Blue Top');
    cy.get('#submit_search').click();
    cy.get('.choose > .nav > li > a').click();
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
    cy.get(':nth-child(4) > a').click();
    cy.get('[data-qa="login-email"]').clear().type('raden@gmail.com');
    cy.get('[data-qa="login-password"]').clear().type('12345');
    cy.get('[data-qa="login-button"]').click();
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
  });
});
