describe("A visitor can sort the planets by Diameter by clicking on its column header", () => {
  before(() => {
    cy.intercept(
      "POST",
      "https://swapi-graphql.netlify.app/.netlify/functions/index",
      {
        fixture: "allPlanetsResponse"
      }
    );
    cy.visit("/");
    cy.get("[data-cy=pt-diameter-header]").click();
  });

  it("is expected to have first table entry with the smallest planet Diameter", () => {
    cy.get("[data-cy=pt-diameter-0]").should("have.text", 0);
  });

  it("is expected to have last table entry with the biggest planet Diameter", () => {
    cy.get("[data-cy=pt-diameter-59]").should("have.text", "BIGNUMBER");
  });
});
