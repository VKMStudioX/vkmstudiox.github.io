context('Basic', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('main page', () => {
    // check if on main page
    cy.url().should('eq', Cypress.env('baseUrl'))
  })
})
