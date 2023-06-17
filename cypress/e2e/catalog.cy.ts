describe('template spec', () => {
    it('catalog-page', () => {
        cy.visit('/');
        cy.findByTestId('catalog-page')
    });
});
