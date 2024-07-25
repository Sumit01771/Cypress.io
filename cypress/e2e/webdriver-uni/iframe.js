/// <reference types="Cypress" />

describe("Handling Iframe & Modals", () => {
  it.only("Handle webdriver iframe and modal", () => {
    cy.visit("https://www.webdriveruniversity.com");
    cy.get("#iframe").invoke("removeAttr", "target").click({ force: true });
  });
});
