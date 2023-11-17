describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.automationexercise.com/');
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click();
    cy.get('#quantity').click().click().clear().type('4');
    cy.get('.product-information').click();
    cy.get(':nth-child(5) > .btn').click();
    cy.get('u').click();
  });
});
