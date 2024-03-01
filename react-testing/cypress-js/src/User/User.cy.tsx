import { User } from "./User";

describe("<User/>", () => {
  it("renders correctly", () => {
    cy.mount(<User email="johndoe@gmail.com" name="John" />);
    cy.get("h1").should("have.text", "John");
    cy.get("p").should("have.text", "johndoe@gmail.com • ");
  });
  it("renders correctly with age 25", () => {
    cy.mount(<User email="johndoe@gmail.com" name="John" dob={1999} />);
    cy.get("h1").should("have.text", "John");
    cy.get("p").should("have.text", "johndoe@gmail.com • 25");
  });
});
