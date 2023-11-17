describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.automationexercise.com/');
    cy.get('#susbscribe_email').clear().type('raden@gmail.com');
    cy.get('#subscribe').click();
  });
});
