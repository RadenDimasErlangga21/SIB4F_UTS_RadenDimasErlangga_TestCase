describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.automationexercise.com/');
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(4) > a').click();
    cy.get('[data-qa="login-email"]').clear('raden1@gmail.com');
    cy.get('[data-qa="login-email"]').type('raden1@gmail.com');
    cy.get('[data-qa="login-password"]').clear('1');
    cy.get('[data-qa="login-password"]').type('12345');
    cy.get('[data-qa="login-button"]').click();
    cy.get(':nth-child(5) > .btn').click();
    cy.get('u').click();
    cy.get('.col-sm-6 > .btn').click();
    cy.get('.form-control').click();
    cy.get(':nth-child(7) > .btn').click();
    cy.get('[data-qa="name-on-card"]').clear('123');
    cy.get('[data-qa="name-on-card"]').type('123');
    cy.get('[data-qa="card-number"]').clear('1');
    cy.get('[data-qa="card-number"]').type('123');
    cy.get('.cvc > .control-label').click();
    cy.get('[data-qa="cvc"]').clear('12');
    cy.get('[data-qa="cvc"]').type('12');
    cy.get('[data-qa="expiry-month"]').clear('12');
    cy.get('[data-qa="expiry-month"]').type('12');
    cy.get('[data-qa="expiry-year"]').clear('2');
    cy.get('[data-qa="expiry-year"]').type('212121');
    cy.get(':nth-child(6) > .col-md-12').click();
    cy.get('[data-qa="pay-button"]').click();
    cy.get(':nth-child(5) > a').click();
    cy.get('[data-qa="continue-button"]').click();
    /* ==== End Cypress Studio ==== */
  })
})