describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.automationexercise.com/');
    cy.get(':nth-child(1) > .panel-heading > .panel-title > a').click();
    cy.get('#Women > .panel-body > ul > :nth-child(1) > a').click();
    cy.get(':nth-child(2) > .panel-heading > .panel-title > a').click();
    cy.get('#Men > .panel-body > ul > :nth-child(1) > a').click();
  });
});
