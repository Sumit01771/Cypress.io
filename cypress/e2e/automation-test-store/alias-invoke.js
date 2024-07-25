/// <reference types="Cypress" />

describe("Verifying varaibles, cypress commands and jquery commands", () => {
  it("Log information of all hair care products", () => {
    // contains() method check the text with the yielded previous elemenet
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    // Targeting the class and then choose the 0th element of then by using 'invoke' via text make and alias named productThumbnail
    cy.get(".fixed_wrapper .prdocutname")
      .eq(0)
      .invoke("text")
      .as("productThumbnail");
    cy.get("@productThumbnail").its("length").should("be.gt", 5);
    cy.get("@productThumbnail").should("include", "Seaweed Conditioner");
  });
  it("Count the number of product and the title of Add to cart", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as("productThumbnail");
    cy.get("@productThumbnail").its("length").should("be.eq", 16);
    cy.get("@productThumbnail")
      .find(".productcart")
      .invoke("attr", "title")
      .should("include", "Add to Cart");
  });
  it.only("Calculate total of normal and sale products", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as("productThumbnail");
    cy.get("@productThumbnail").find(".oneprice");
    //iterating through the price of product using .each() and extracting the text of price
    //   .each(($el, index, $list) => {
    //     cy.log($el.text());

    //   });
    cy.get(".thumbnail").find(".oneprice").invoke("text").as("productPrice");
    cy.get(".thumbnail")
      .find(".pricenew")
      .invoke("text")
      .as("productSalePrice");
    let totalProductSumPrice = 0;
    cy.get("@productPrice").then((price) => {
      let totalSumPrice = 0;
      let tempArr = price.split("$");
      for (var i = 0; i < tempArr.length; i++) {
        cy.log(tempArr[i]);
        totalSumPrice += Number(tempArr[i]);
      }
      totalProductSumPrice += totalSumPrice;
      cy.log("The price of product: ", +totalSumPrice);
    });
    cy.get("@productSalePrice")
      .then((salePrice) => {
        let totalSaleSumPrice = 0;
        let temArr2 = salePrice.split("$");
        for (var i = 0; i < temArr2.length; i++) {
          cy.log(temArr2[i]);
          totalSaleSumPrice += Number(temArr2[i]);
        }
        totalProductSumPrice += totalSaleSumPrice;
        cy.log("The price of sale product: ", +totalSaleSumPrice);
      })
      .then(() => {
        cy.log(" The total price of all Product: ", +totalProductSumPrice);
        expect(totalProductSumPrice).to.equal(648.5);
      });
  });
});
