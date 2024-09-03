/// <reference types="Cypress" />

describe("Validate webdriveruni homapage links", () => {
  it("Confirm links redirect to the correct pages", () => {
    cy.visit("https://www.webdriveruniversity.com");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.url().should("include", "Contact-Us");
    cy.go("back");
    cy.reload();
    // cy.reload(true) // reload the page without using cache
    cy.go("forward");
    cy.url().should("include", "Contact-Us");

    cy.go("back");
    cy.get("#login-portal")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.url().should("include", "Login-Portal");
    cy.go("back");
  });
});
