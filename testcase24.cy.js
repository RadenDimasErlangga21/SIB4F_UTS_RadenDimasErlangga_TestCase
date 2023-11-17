describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.automationexercise.com/');
    
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="signup-name"]').click();
    
    cy.get('[data-qa="login-email"]').clear().type('raden@gmail.com');
    cy.get('[data-qa="signup-name"]').clear().type('Raden123');
    cy.get('[data-qa="signup-email"]').click();
    
    cy.get('[data-qa="login-email"]').clear().type('raden@gmail.com');
    cy.get('[data-qa="signup-name"]').clear().type('Raden123');
    cy.get('[data-qa="signup-email"]').clear().type('raden123@gmail.com');
    cy.get('#susbscribe_email').clear().type('raden123@gmail.com');
    cy.get('[data-qa="signup-button"]').click();
    
    cy.get('.clearfix > :nth-child(3)').click();
    cy.get('#id_gender1').check();
    cy.get('[data-qa="password"]').clear().type('12345');
    cy.get('[data-qa="days"]').select('10');
    cy.get('[data-qa="months"]').select('9');
    cy.get('[data-qa="years"]').select('2001');
    cy.get('#newsletter').check();
    cy.get('#optin').check();
    cy.get('[data-qa="first_name"]').clear().type('Raden');
    cy.get('[data-qa="name"]').clear().type('Raden123');
    cy.get('[data-qa="last_name"]').clear().type('Raden');
    cy.get('[data-qa="company"]').clear().type('ASD');
    
    cy.get('form > :nth-child(14)').click();
    cy.get('[data-qa="address"]').clear().type('Tokyo');
    cy.get('[data-qa="address2"]').clear().type('Tokyo');
    cy.get('[data-qa="country"]').select('Singapore');
    cy.get('[data-qa="state"]').clear().type('Tokyo');
    cy.get('[data-qa="city"]').clear().type('Tokyo');
    cy.get('[data-qa="zipcode"]').clear().type('1235');
    cy.get('[data-qa="mobile_number"]').clear().type('2345678');
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="continue-button"]').click();
    
    cy.get(':nth-child(6) > .product-image-wrapper > .choose > .nav > li > a').click();
    cy.get(':nth-child(5) > .btn').click();
    cy.get('u').click();
    cy.get('.col-sm-6 > .btn').click();
    cy.get(':nth-child(7) > .btn').click();
    
    cy.get('[data-qa="name-on-card"]').clear().type('123');
    cy.get('[data-qa="card-number"]').clear().type('12345');
    cy.get('[data-qa="cvc"]').clear().type('21');
    cy.get('[data-qa="expiry-month"]').clear().type('21');
    cy.get('[data-qa="expiry-year"]').clear().type('20000');
    cy.get('[data-qa="pay-button"]').click();
    
    cy.get('.col-sm-9 > .btn-default').click();
    cy.get(':nth-child(5) > a').click();
    cy.get('[data-qa="continue-button"]').click();
  });
});
