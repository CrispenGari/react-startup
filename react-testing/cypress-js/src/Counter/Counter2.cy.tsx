import Counter from "./Counter";

describe("<Counter2 />", () => {
  it("Should render correctly with initial count set to 10", async () => {
    cy.mount(<Counter value={10} />);
    cy.findAllByRole("button").should("have.length", 2);
    cy.findByRole("heading", { level: 1 }).should("have.text", "10");
    cy.findByRole("textbox").should("exist");
  });

  it("Should render increment by 5", () => {
    cy.mount(<Counter value={10} />);
    cy.findByRole("textbox").type("5");
    cy.findByRole("button", { name: /increment/i }).click();
    cy.findByRole("heading", { level: 1 }).should("have.text", "15");
  });
  it("Should render decrement by 3", () => {
    cy.mount(<Counter value={7} />);
    cy.findByRole("textbox").type("3");
    cy.findByRole("button", { name: /decrement/i }).click();
    cy.findByRole("heading", { level: 1 }).should("have.text", "4");
  });
});
