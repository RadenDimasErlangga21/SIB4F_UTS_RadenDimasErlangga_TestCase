describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.automationexercise.com/');

    cy.get('.shop-menu > .nav > :nth-child(8) > a').click();
    cy.get('[data-qa="name"]').clear().type('Raden');
    cy.get('[data-qa="email"]').clear().type('raden@gmail.com');
    cy.get('[data-qa="subject"]').clear().type('test');
    cy.get('[data-qa="message"]').click();
    cy.get(':nth-child(6) > .form-control').click();
    cy.get('[data-qa="submit-button"]').click();
    cy.get('span').click();
  });
});
