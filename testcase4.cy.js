describe('login', () => {
  it('logged in', () => {
    cy.visit('https://www.automationexercise.com');
    cy.visit('https://www.automationexercise.com/login');
    cy.get('[data-qa="login-email"]').clear().type('raden@gmail.com');
    cy.get('[data-qa="login-password"]').clear().type('12345');
    cy.get('[data-qa="login-button"]').click();
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
  });
});
