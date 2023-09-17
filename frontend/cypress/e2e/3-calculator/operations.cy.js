/// <reference types="cypress" />

describe('Test de la calculadora', () => {
    beforeEach(() => {

      cy.visit('http://localhost:5173/')
    })
  
    it('Muestra el componente calculadora', () => {

      cy.get('#operation').should('exist').and("have.value", "0");
  
    })
  
    it('Realiza una suma correctamente', () => {
      cy.contains('8').should('exist').click();
      cy.contains('+').should('exist').click();
      cy.contains('4').should('exist').click();
      cy.contains('2').should('exist').click();
      cy.contains('=').should('exist').click();

      cy.get('#operation').should("have.value", "=50");

    })

    it('Verificar error de sintaxis', () => {
        cy.contains('1').should('exist').click();
        cy.contains('6').should('exist').click();
        cy.contains('4').should('exist').click();
        cy.contains('/').should('exist').click();
        cy.contains('=').should('exist').click();
  
        cy.get('#operation').should("have.value", "Syntax Error");
  
      })
  })
  