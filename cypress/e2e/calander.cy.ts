import { addDays } from '@appsaurora/utils';
import { add } from 'cypress/types/lodash';
import isWeekend from 'date-fns/isWeekend';

describe('template spec', () => {
    beforeEach(() => {
        cy.visit('/calendar');
    });

    it('calendar-page', () => {
        cy.findByTestId('calendar');
    });

    context('Calendar Selection Testing', () => {
        const getDays = () => {
            const date = new Date();

            const daysToTest = 10;
            let weekDays = 0,
                weekends = 0;
            const days: string[] = [];

            for (let index = 0; index < daysToTest; index++) {
                if (isWeekend(date)) weekends++;
                else weekDays++;

                days.push(`date_${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
                addDays(date, 1);
            }

            cy.findByTestId(days[0]).click();
            cy.findByTestId(days[days.length - 1]).click();
            return { days, weekDays, weekends };
        };

        beforeEach(() => {
            cy.visit('/calendar');
        });

        it('date selection', () => {
            const { weekDays, weekends } = getDays();

            // Check Values
            cy.findByTestId('days-count').contains(weekDays + weekends);
            cy.findByTestId('weekdays-count').contains(weekDays);
            cy.findByTestId('weekend-count').contains(weekends);
        });
        it('style', () => {
            const { days } = getDays();
            for (const day of days) {
                cy.findByTestId(day).children('div').should('have.class', 'bg-slate-300');
            }
        });

        it.only('url', () => {
            const { days } = getDays();
            const sDay = days[0].split('_')[1];
            const eDay = days[days.length - 1].split('_')[1];

            cy.location().should((loc) => {
                expect(loc.search).contains(`startDate=${sDay}`);
                expect(loc.search).contains(`endDate=${eDay}`);
            });
        });
    });
});
