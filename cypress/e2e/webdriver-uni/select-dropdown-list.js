/// <reference types="Cypress" />

describe("Interact with dropdown list via webDriverUni", () => {
  it("Select specific values via select dropdown lists", () => {
    cy.visit("https://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#dropdowm-menu-1").select("c#");
    cy.get("#dropdowm-menu-2").select("maven").should("have.value", "maven");
    cy.get("#dropdowm-menu-3").select("JavaScript").contains("JavaScript");
  });
});
