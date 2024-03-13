describe('template spec', () => {
  it('navigate to wikipedia', () => {
    cy.visit('https://www.wikipedia.org/')
    
  })
  it('click English', () => {
    cy.visit('https://www.wikipedia.org/')
    cy.get('#js-link-box-en').click();   
  })
})