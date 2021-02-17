it ('Should check 5+2 equals 7', () => {
    // 1. Arrange 
    cy.visit('http://127.0.0.1:5500')
    // 2. Act
    cy.get('#five').click();
    cy.get('#add').click();
    cy.get('#two').click();
    cy.get('#equals').click();
     // 3. Assert - How can we improve this?
     //    https://docs.cypress.io/api/commands/should.html#Yields
    cy.get('#input__box').should('contain', '5+2')
    cy.get('#input__box').should('contain', '=')
    cy.get('#input__box').should('contain', '7')
});

it ('Should check 5*6 equals 30', () => {
    // 1. Arrange 
    cy.visit('http://127.0.0.1:5500')
    // 2. Act
    cy.get('#five').click();
    cy.get('#multiply').click();
    cy.get('#six').click();
    cy.get('#equals').click();
     // 3. Assert - How can we improve this?
     //    https://docs.cypress.io/api/commands/should.html#Yields
    cy.get('#input__box').should('contain', '5*6')
    cy.get('#input__box').should('contain', '=')
    cy.get('#input__box').should('contain', '30')
});

it ('Should check 50% equals 0.5', () => {
    // 1. Arrange 
    cy.visit('http://127.0.0.1:5500')
    // 2. Act
    cy.get('#five').click();
    cy.get('#zero').click();
    cy.get('#percentage').click();
    cy.get('#equals').click();
     // 3. Assert - How can we improve this?
     //    https://docs.cypress.io/api/commands/should.html#Yields
    cy.get('#input__box').should('contain', '50%')
    cy.get('#input__box').should('contain', '=')
    cy.get('#input__box').should('contain', '0.5')
});

it ('Should check 90/9 equals 10', () => {
    // 1. Arrange 
    cy.visit('http://127.0.0.1:5500')
    // 2. Act
    cy.get('#nine').click();
    cy.get('#zero').click();
    cy.get('#divide').click();
    cy.get('#nine').click();
    cy.get('#equals').click();
     // 3. Assert - How can we improve this?
     //    https://docs.cypress.io/api/commands/should.html#Yields
    cy.get('#input__box').should('contain', '90/9')
    cy.get('#input__box').should('contain', '=')
    cy.get('#input__box').should('contain', '10')
});

it ('Should check 8-2 equals 6', () => {
    // 1. Arrange 
    cy.visit('http://127.0.0.1:5500')
    // 2. Act
    cy.get('#eight').click();
    cy.get('#subtract').click();
    cy.get('#two').click();
    cy.get('#equals').click();
     // 3. Assert - How can we improve this?
     //    https://docs.cypress.io/api/commands/should.html#Yields
    cy.get('#input__box').should('contain', '8-2')
    cy.get('#input__box').should('contain', '=')
    cy.get('#input__box').should('contain', '6')
});
