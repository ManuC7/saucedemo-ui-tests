const { loginPage } = require("./selectors");

Cypress.Commands.add("login", (user, password) => {
  cy.visit("/");
  cy.get(loginPage.inputUsername).type(user);
  cy.get(loginPage.inputPassword).type(password);
  cy.get(loginPage.buttonLogin).click();
  cy.url().should("contain", "inventory.html");
});
