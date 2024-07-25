/// <reference types="Cypress" />

describe("Verifying varaibles, cypress commands and jquery commands", () => {
  it("Log information of all hair care products", () => {
    // contains() method check the text with the yielded previous elemenet
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log("Index " + index + " : " + $el.text());
    });
  });
  it.only("Add specific product to basket", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log("Index " + index + " : " + $el.text());
      if ($el.text() === "Eau Parfumee au The Vert Shampoo") {
        cy.wrap($el).click();
      }
    });
  });
});
