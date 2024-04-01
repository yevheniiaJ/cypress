/// <reference types="Cypress" />

describe('Five tests', () => {

  beforeEach(() => {
    cy.openSite();
  })

  it('Search', () => {
    cy.get('#twotabsearchtextbox').type('chocolate');
    cy.get('#nav-search-submit-button').click();
    cy.get(`#-title`).should('be.visible');
  });

  it('customer service', () => {
    cy.get(`.nav-a`).should('have.length', 12);
  });

  it('returns&Orders with invalid login ', () => {
    cy.get(`#nav-orders`).click();
    cy.get(`#ap_email`).type('test');
    cy.get(`#ap_password`).type('password');
    cy.get(`#signInSubmit`).click();
  });

  it('displaying a cart if a user is not logged in ', () => {
    cy.get(`#nav-cart-count`).click();
    cy.get(`#a-autoid-1`).should('be.visible')
  });

  it('deliver to Ukraine , check zip code', () => {
    cy.get(`#nav-global-location-popover-link`).click();
    cy.get("#GLUXZipUpdate").click();
    cy.get(".a-alert-inline-error").eq(0).should('be.visible');
  });

})