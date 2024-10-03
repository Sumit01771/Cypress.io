/// <reference types="Cypress" />

describe("Verify Automation dropdown lists via webdriveruni", () => {
  it("Select specific product via autocomplete list", () => {
    cy.visit("https://www.webdriveruniversity.com");
    cy.get("#autocomplete-textfield")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#myInput").type("A");
    cy.get(".autocomplete-items >*")
      .each(($el, index, $list) => {
        var product = $el.text();
        var productToSelect = "Apple";
        if (product == productToSelect) {
          cy.wrap($el).click();
          cy.get("#submit-button").click();
          cy.url().should("include", productToSelect);
        }
      })
      .then(() => {
        cy.get("#myInput").type("G");
        cy.get(".autocomplete-items >*").each(($el, index, $list) => {
          var product = $el.text();
          var productToSelect = "Grapes";
          if (product == productToSelect) {
            cy.wrap($el).click();
            cy.get("#submit-button").click();
            cy.url().should("include", productToSelect);
          }
        });
      });
  });
});
