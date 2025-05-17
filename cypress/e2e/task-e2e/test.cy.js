let baseUrl = "https://opensource-demo.orangehrmlive.com/web/";

describe("Task E2E Test", () => {
  context("1. Menambahkan Karyawan Baru", () => {
    beforeEach(() => {
      cy.visit(baseUrl);

      // Login
      cy.xpath(`//input[@placeholder='Username']`).type("Admin");
      cy.xpath(`//input[@placeholder='Password']`).type("admin123");
      cy.xpath(`//button[normalize-space()='Login']`).click();
      cy.url().should("include", "/dashboard");
    });
    it("1.2 Menambahkan Karyawan", () => {
      cy.wait(2000);
      cy.xpath(`//span[text()='PIM']`).click();
      cy.wait(2000);
      cy.xpath(`//button[contains(., 'Add')]`).click();
      cy.xpath(`//input[@placeholder='First Name']`).type("Indah");
      cy.xpath(`//input[@placeholder='Middle Name']`).type("Mutiah");
      cy.xpath(`//input[@placeholder='Last Name']`).type("Test");

      cy.get(`.oxd-switch-input`).click();
      cy.xpath(
        "//label[text()='Username']/../following-sibling::div/input"
      ).type("testIndah");
      cy.xpath(`(//input[@type='password'])[1]`).type("indah123");
      cy.xpath(`(//input[@type='password'])[2]`).type("indah123");

      cy.xpath(`//button[normalize-space()='Save']`).click();
    });
    it("1.3 Buat Akun Untuk Karyawan", () => {
      let dropdownRole = `//label[text()='User Role']/following::div[contains(@class,'oxd-select-text-input')][1]`;
      let dropdownStatus = `//label[text()='Status']/following::div[contains(@class,'oxd-select-text-input')][1]`;
      let userSuggestion = `//input[@placeholder='Type for hints...']`;
      let userSuggestionResult = `//div[@role='listbox']//div[@role='option'][1]`;

      cy.xpath(`//span[text()='Admin']`).click();
      cy.xpath(`//button[contains(., 'Add')]`).click();
      cy.xpath(dropdownRole).click();
      cy.xpath(`//div[@role='option']//span[text()='ESS']`).click();

      cy.xpath(userSuggestion).type("Indah Mutiah");
      cy.wait(2000);
      cy.xpath(userSuggestionResult).click();

      cy.xpath(dropdownStatus).click();
      cy.xpath(`//div[@role='option']//span[text()='Enabled']`).click();

      cy.xpath(
        "//label[text()='Username']/../following-sibling::div/input"
      ).type("testIndahQA");
      cy.xpath(`(//input[@type='password'])[1]`).type("indah123");
      cy.xpath(`(//input[@type='password'])[2]`).type("indah123");

      cy.xpath(`//button[normalize-space()='Save']`).click();
    });
  });
});
