/// <reference types="Cypress" />
describe('template spec', () => {
  it('navigate to wikipedia', () => {
    cy.visit('https://www.wikipedia.org/');
  })

  it('click English', () => {
    cy.visit('https://www.wikipedia.org/')
    cy.get('#js-link-box-en').click();
    cy.get('.mw-headline').should('be.visible');
    cy.get('#pt-login-2').should('be.visible');
    cy.get('#pt-createaccount-2').should('be.visible');
    cy.get('#vector-user-links-dropdown').should('be.visible');
  })

  it('first() & last() commands, eq(4) - get 4th element. We start counting from 0', () => {
    cy.visit('https://www.wikipedia.org/');
    cy.get('#js-lang-list-button').click();
    cy.get(".langlist>ul>li a").eq(2).click();
    cy.get('#Willkommen_bei_Wikipedia').should('be.visible');
  })

  it('cy.go(‘back’) && cy.go(‘forward’)', () => {
    cy.visit('https://www.wikipedia.org/');
    cy.get('#js-lang-list-button').click();
    cy.get(".langlist>ul>li a").eq(2).click();
    cy.get('#Willkommen_bei_Wikipedia').should('be.visible');
    cy.go('back');
    cy.go('forward');
    cy.get('#Willkommen_bei_Wikipedia').should('be.visible');
  })

  it('should() documentation, should(‘have.attr’, ‘disabled’)', () => {
    cy.visit('https://www.wikipedia.org/');
    cy.get('#js-lang-list-button').click();
    cy.get(".langlist>ul>li a").eq(2).should('have.attr', 'lang');
  })

  it('and() === should()', () => {
    cy.visit('https://www.wikipedia.org/');
    cy.get('#js-lang-list-button').click();
    cy.get(".langlist>ul>li a").eq(2).should('have.attr', 'lang');
    cy.get(".langlist>ul>li a").eq(2).and('have.css', 'color', 'rgb(51, 102, 204)');
  })

  it('cy.get(‘locator’).as(‘lovelyBtn’). Then you can use cy.get(‘@‘lovelyBtn’’).click()', () => {
    cy.visit('https://www.wikipedia.org/');
    cy.get('#searchInput').eq(0).as('search').type("Test{enter}");
    cy.go('back');
    cy.get('@search').eq(0).type("wikipedia{enter}");
  });

  it('then(). How you get cy.get(‘locator’).then(el => {...}), how to add class to element. ', () => {
    cy.visit('https://www.wikipedia.org/');
    cy.get('#js-lang-list-button').click();
    cy.get(".langlist>ul>li a").eq(2).then((elements) => {
      expect(elements).to.have.attr('lang');
      expect(elements).to.have.css('color', 'rgb(51, 102, 204)');
    });
  });

  it('Press key cy.get(‘select locator’).type(“hello dude{enter}”)', () => {
    cy.visit('https://www.wikipedia.org/');
    cy.get('select').select('Polski').should('have.value', 'pl');
  });

  it('blur(), focus()', () => {
    cy.visit('https://www.wikipedia.org/');
    cy.get('#searchInput').as('search').focus();
    cy.get('@search').type("Test");
    cy.get('@search').blur();
    cy.get('@search').should('not.be.focused');
  });

  it('children()', () => {
    cy.visit('https://www.wikipedia.org/');
    cy.get(`[dir='ltr']`).children().should('have.length', 9);
  });

  it.only('parent() and screenshot', { defaultCommandTimeout: 5000 }, () => {
    cy.visit('/');
    cy.get(`a.link-box`).parent().should('have.class', 'central-featured-lang lang1');
    cy.screenshot();
  });

})