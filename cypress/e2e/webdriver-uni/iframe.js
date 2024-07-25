/// <reference types="Cypress" />

describe("Handling Iframe & Modals", () => {
  it.only("Handle webdriver iframe and modal", () => {
    cy.visit("https://www.webdriveruniversity.com");
    cy.get("#iframe").invoke("removeAttr", "target").click({ force: true });

    cy.get("#frame").then(($iframe) => {
      const body = $iframe.contents().find("body");
      cy.wrap(body).as("iframe");
    });

    cy.get("@iframe").find("#button-find-out-more").click();

    cy.get("@iframe").find("#myModal").as("modal");

    cy.get("@modal").then(($expectedText) => {
      const text = $expectedText.text();
      expect(text).to.include("Welcome to webdriveruniversity");
    });

    cy.get("@modal").contains("Close").click();
  });
});
