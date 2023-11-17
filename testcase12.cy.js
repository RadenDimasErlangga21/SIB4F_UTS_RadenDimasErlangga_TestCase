describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.automationexercise.com/');
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    cy.visit('https://www.automationexercise.com/products');
    cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click({ force: true });
    cy.get('.modal-footer > .btn').click({ force: true });
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    cy.get(':nth-child(5) > .btn').click({ force: true });
    cy.get('.modal-footer > .btn').click({ force: true });
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
  });
});
