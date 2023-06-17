describe('template spec', () => {
    it('age', () => {
        cy.visit('/age');
        cy.findByTestId('age');
    });
});
