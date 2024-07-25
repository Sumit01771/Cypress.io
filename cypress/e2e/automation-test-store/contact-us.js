/// <reference types="Cypress" />

describe("Test Contact US form via Automation Test Store", () => {
  it.only("Should be able to submit a successful submission via contact us form", () => {
    // Cypress code
    cy.visit("https://automationteststore.com/");
    cy.title().should("include", "A place to practice your automation skills!");
    cy.url().should("include", "automationteststore");
    cy.get("a[href$='contact']")
      .click()
      .then((text) => {
        console.log("Given text is:", text.text());
      });
    cy.get("input[id='ContactUsFrm_first_name']").type("Sumit Singh");
    cy.get("input[id='ContactUsFrm_email']").type("singhsumit01771@gmail.com");
    cy.get("textarea[id='ContactUsFrm_enquiry']").type(
      "Hi there! following code is in Cypress framework. Thankyou for checking this out."
    );
    cy.get("[class='btn btn-primary lock-on-click']").click();
    cy.get(".mb40 p:nth-child(3)").should(
      "have.text",
      "Your enquiry has been successfully sent to the store owner!"
    );
  });
  it("Should not be able to submit a successful submission via contact us form", () => {
    // Cypress code
  });
});
