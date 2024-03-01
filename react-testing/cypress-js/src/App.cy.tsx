describe("<App/>", () => {
  describe("<Login/>", () => {
    it("start at login page", () => {
      cy.visit("/");
      cy.findByPlaceholderText(/nickname/i).should("exist");
      cy.findByPlaceholderText(/password/i).should("exist");
      cy.findByRole("button").should("exist");
      cy.findByText(/invalid credentials./i).should("not.exist");
    });

    it("login with error", () => {
      cy.visit("/");
      cy.findByPlaceholderText(/nickname/i).type("bob");
      cy.findByPlaceholderText(/password/i).type("bob");
      cy.findByRole("button").click();
      cy.findByText(/invalid credentials./i).should("exist");
    });

    it("login with correct credentials", () => {
      cy.visit("/");
      cy.findByPlaceholderText(/nickname/i).type("bob");
      cy.findByPlaceholderText(/password/i).type("b0b");
      cy.findByRole("button").click();
      cy.findByText(/invalid credentials./i).should("not.exist");
    });
  });
  describe("<Form/>", () => {
    it("to have an input", () => {
      cy.visit("/");
      cy.findByPlaceholderText(/nickname/i).type("bob");
      cy.findByPlaceholderText(/password/i).type("b0b");
      cy.findByRole("button").click();
      cy.findByText(/invalid credentials./i).should("not.exist");

      cy.findByPlaceholderText(/nickname/i).should("exist");
      cy.findByRole("button", { name: /greet/i }).should("exist");
      cy.findByText(/invalid credentials./i).should("not.exist");
    });
    it("should tell me that i'm not alice", () => {
      cy.visit("/");
      cy.findByPlaceholderText(/nickname/i).type("bob");
      cy.findByPlaceholderText(/password/i).type("b0b");
      cy.findByRole("button").click();
      cy.findByText(/invalid credentials./i).should("not.exist");

      cy.findByPlaceholderText(/nickname/i).type("alice");
      cy.findByRole("button").click();
      cy.findByText(/No you are not alice!/i).should("exist");
    });
    it("send a hello message", () => {
      cy.visit("/");
      cy.findByPlaceholderText(/nickname/i).type("bob");
      cy.findByPlaceholderText(/password/i).type("b0b");
      cy.findByRole("button").click();
      cy.findByText(/invalid credentials./i).should("not.exist");

      cy.findByPlaceholderText(/nickname/i).type("bob");
      cy.findByRole("button").click();
      cy.findByText(/Hello bob!/i).should("exist");
    });
  });
});
