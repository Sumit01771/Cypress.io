/// <reference types="Cypress" />

describe("Verifying varaibles, cypress commands and jquery commands", () => {
  beforeEach(function () {
    cy.fixture("example").then((data) => {
      globalThis.data = data;
    });
  });

  it("Log information of all hair care products", () => {
    // contains() method check the text with the yielded previous elemenet
    cy.visit(data.URL);
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log("Index " + index + " : " + $el.text());
    });
  });
  it.only("Add specific product to basket via Product name", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    cy.ClickOnProductByProductName("Eau Parfumee au The Vert Shampoo");
  });
});
