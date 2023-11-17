describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.automationexercise.com/');
    cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click();
    cy.get(':nth-child(5) > .btn').click();
    cy.get('.modal-footer > .btn').click();
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
    cy.get('.cart_quantity_delete > .fa').click();
  });
});
