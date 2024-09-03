/// <reference types="Cypress" />

describe("Verify checkboxes via webdriveruni", () => {
  it("Check and Validate checkbox", () => {
    cy.visit("https://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("input[value='option-1']").check().should("be.checked");
  });
  it("Uncheck and Validate the checkbox", () => {
    cy.visit("https://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("input[value='option-2']").check();
    cy.get("input[value='option-2']").uncheck().should("not.be.checked");
  });
  it("Multiple checkbox selection", () => {
    cy.visit("https://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("input[type='checkbox']").check([
      "option-1",
      "option-2",
      "option-3",
      "option-4",
    ]);
  });
  it("Multiple checkbox unselection", () => {
    cy.visit("https://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("input[type='checkbox']").uncheck([
      "option-1",
      "option-2",
      "option-3",
      "option-4",
    ]);
  });
});
