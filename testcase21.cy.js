describe('product review', () => {
  it('submits a review', () => {
    cy.visit('https://www.automationexercise.com/');
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click();
    cy.get('#name').clear().type('Raden');
    cy.get('#email').clear().type('raden@gmail.com');
    cy.get('#review').type('123');
    cy.get('#button-review').click();
  });
});
