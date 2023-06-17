describe('template spec', () => {
    it('timer', () => {
        cy.visit('/timer');
        cy.findByTestId('timer');
    });
});
