describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.automationexercise.com/');
    cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click();
  });
});
