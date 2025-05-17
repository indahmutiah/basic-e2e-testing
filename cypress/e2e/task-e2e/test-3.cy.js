let baseUrl =
  "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

describe("Task E2E Test No3", () => {
  context("3. Karyawan Baru Request Cuti", () => {
    beforeEach(() => {
      cy.visit(baseUrl);

      // Login
      cy.xpath(`//input[@placeholder='Username']`).type("testIndahQA");
      cy.xpath(`//input[@placeholder='Password']`).type("indah123");
      cy.xpath(`//button[normalize-space()='Login']`).click();
      cy.url().should("include", "/dashboard");
    });
    it("3.1 Request Cuti Karyawan", () => {
      cy.xpath(`//span[text()='Leave']`).click();
      cy.wait(2000);
    });
  });
});
