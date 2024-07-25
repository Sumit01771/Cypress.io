/// <reference types="Cypress" />

describe("Inspect Automation Test Score item using chain of commands", () => {
  it.only("Click on the first item using item text", () => {
    // contains() method check the text with the yielded previous elemenet
    cy.visit("https://automationteststore.com/");
    cy.get(".prdocutname")
      .contains("Skinsheen Bronzer Stick")
      .click()
      .then((text) => {
        console.log("Given text is:", text.text());
      });
  });
  // find() method dig up the element which are child/subchild of yielded parent element
  // it.only("Click on the first item using index", () => {
  //   cy.visit("https://automationteststore.com/");
  //   cy.get(".fixed_wrapper").find(".prdocutname").eq(0).click();
  //   cy.log("Hello! Sumit");
  // });
  //
});
