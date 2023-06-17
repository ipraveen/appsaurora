describe('template spec', () => {
    it('calendar-page', () => {
        cy.visit('/calendar');
        cy.findByTestId('calendar');
    });
});
