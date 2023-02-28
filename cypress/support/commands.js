Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Paulo')
    cy.get('#lastName').type('Melo')
    cy.get('#email').type('paulofsm95@gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('.button','Enviar').click()
})