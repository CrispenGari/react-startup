import Counter from "./Counter";

describe("<Counter/>", () => {
  it("Should render correctly with initial count set to 10", () => {
    cy.mount(<Counter value={10} />);

    cy.get("h1").should("have.text", "10");
    cy.get("input").should("exist");
    cy.get("button").should("have.length", 2);
  });

  it("Should render increment by 5", () => {
    cy.mount(<Counter value={10} />);
    cy.get("[data-cy=amount]").type("5");
    cy.get("[data-cy=increment]").click();
    cy.get("h1").should("have.text", "15");
  });
  it("Should render decrement by 3", () => {
    cy.mount(<Counter value={7} />);
    cy.get("[data-cy=amount]").type("3");
    cy.get("[data-cy=decrement]").click();
    cy.get("h1").should("have.text", "4");
  });
});
