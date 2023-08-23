/// <reference types="cypress" />

describe('Empty Test', () => {

    beforeEach(() => {
        cy.visit('/login');
    });
    
    it('should display the title', () => {

        cy.get('div').contains('Dilwale Dulhania Le Jayenge');
    });
    
});