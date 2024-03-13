describe('template spec', () => {
  it('navigate to wikipedia', () => {
   cy.visit('https://www.wikipedia.org/')
  })

  it('click English', () => {
    cy.visit('https://www.wikipedia.org/')
    cy.get('#js-link-box-en').click();   
    cy.get('.mw-headline').should('be.visible');
    cy.get('#pt-login-2').should('be.visible');
    cy.get('#pt-createaccount-2').should('be.visible');
    cy.get('#vector-user-links-dropdown').should('be.visible');
  })
})