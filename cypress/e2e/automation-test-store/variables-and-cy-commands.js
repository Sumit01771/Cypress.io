/// <reference types="Cypress" />

describe("Verifying varaibles, cypress commands and jquery commands", () => {
  it("Navigating to a specific product pages", () => {
    // contains() method check the text with the yielded previous elemenet
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Makeup").click();
    cy.get("span.maintext").then(($headerText) => {
      const headerText = $headerText.text();
      cy.log("The headet is: " + headerText);
      expect(headerText).is.eq("Makeup");
    });
  });
});
