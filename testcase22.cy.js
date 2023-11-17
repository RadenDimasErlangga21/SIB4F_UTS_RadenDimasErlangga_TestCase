describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.automationexercise.com/');
    cy.get('.active > :nth-child(1) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
    cy.get('u').click();
  });
});
