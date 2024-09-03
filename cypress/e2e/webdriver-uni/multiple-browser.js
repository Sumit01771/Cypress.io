/// <reference types="Cypress" />

describe("Test Contact US form via WebdriverUni", () => {
  it.only("Should be able to submit a successful submission via contact us form", () => {
    // Visiting the website
    cy.visit("https://www.webdriveruniversity.com");
    // By removing the below attribute, allow us to open the page in the same tab.
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    // Validate the title of page.
    cy.title().should("include", "WebDriver | Contact Us");
    // Validate the url of page.
    cy.url().should("include", "Contact-Us");
    // cy.get("a").contains("CONTACT US").click();
    cy.get("input[name='first_name']").type("Sumit");
    cy.get("input[placeholder='Last Name']").type("Singh");
    cy.get("input[name='email']").type("singhsumit01771@gmail.com");
    cy.get("textarea[name='message']").type("Hi there! I'm writing the code.");
    cy.get(".contact_button").contains("SUBMIT").click();
    cy.get("div[id='contact_reply'] > h1").should(
      "have.text",
      "Thank You for your Message!"
    );
  });

  it("Should not be able to submit a successful submission via contact us form", () => {
    // Cypress code
    cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
    // cy.get("a").contains("CONTACT US").click();
    // cy.get("input[name='first_name']").type("Sumit");
    cy.get("input[placeholder='Last Name']").type("Singh");
    cy.get("input[name='email']").type("singhsumit01771@gmail.com");
    cy.get("textarea[name='message']").type("Hi there! I'm writing the code.");
    cy.get(".contact_button").contains("SUBMIT").click();
    cy.get("body").contains("Error: all fields are required");
  });
});
