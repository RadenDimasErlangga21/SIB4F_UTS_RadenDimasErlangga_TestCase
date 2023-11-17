describe('login', () => {
  it('logged in', () => {
    cy.visit('https://www.automationexercise.com');
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="login-email"]').clear().type('raden1@gmail.com');
    cy.get('[data-qa="login-password"]').clear().type('123456');
    cy.get('[data-qa="login-button"]').click();
  });
});
