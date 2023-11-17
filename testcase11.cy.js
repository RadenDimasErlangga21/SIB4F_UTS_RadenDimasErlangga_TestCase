describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.automationexercise.com/');
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
    cy.get('#susbscribe_email').clear().type('raden@gmail.com');
    cy.get('#subscribe > .fa').click();
  });
});
