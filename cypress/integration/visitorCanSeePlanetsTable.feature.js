describe("A visitor visiting the main view of the application", () => {
  before(() => {
    cy.visit("/");
  });

  it("is expected to see a table of planets", () => {
    cy.get("[data-cy=planets-table]").should("be.visible");
  });

  describe("can see 4 table columns", () => {
    it("is expected to see 'Planet Name' column", () => {
      cy.get("[data-cy=pt-name-header]").should("contain.text", "Planet Name");
    });

    it("is expected to see 'Gravity' column", () => {
      cy.get("[data-cy=pt-gravity-header]").should("contain.text", "Gravity");
    });

    it("is expected to see 'Diameter' column", () => {
      cy.get("[data-cy=pt-diameter-header]").should("contain.text", "Diameter");
    });

    it("is expected to see 'Population' column", () => {
      cy.get("[data-cy=pt-population-header]").should("contain.text", "Population");
    });
  });
});
