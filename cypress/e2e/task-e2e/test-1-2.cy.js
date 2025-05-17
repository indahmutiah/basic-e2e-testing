let baseUrl =
  "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

let dropdownRole = `//label[text()='User Role']/following::div[contains(@class,'oxd-select-text-input')][1]`;
let dropdownStatus = `//label[text()='Status']/following::div[contains(@class,'oxd-select-text-input')][1]`;
let userSuggestion = `//input[@placeholder='Type for hints...']`;
let userSuggestionResult = `//div[@role='listbox']//div[@role='option'][1]`;
let buttonSave = `//button[normalize-space()='Save']`;

describe("Task E2E Test No1 dan No2", () => {
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

      cy.xpath(buttonSave).click();
      cy.wait(5000);
    });
    it("1.3 Buat Akun Untuk Karyawan", () => {
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

      cy.xpath(buttonSave).click();
    });
  });

  context("2. Menambahkan Jatah Cuti Karyawan", () => {
    beforeEach(() => {
      cy.visit(baseUrl);

      // Login
      cy.xpath(`//input[@placeholder='Username']`).type("Admin");
      cy.xpath(`//input[@placeholder='Password']`).type("admin123");
      cy.xpath(`//button[normalize-space()='Login']`).click();
      cy.url().should("include", "/dashboard");
    });
    // Menambahkan Jatah Cuti Karyawan
    it("2.1 Menambahkan Jatah Cuti Karyawan", () => {
      let dropdownLeave = `//div[@class="oxd-select-text-input" and text()='-- Select --']`;
      cy.xpath(`//span[text()='Leave']`).click();
      cy.wait(2000);
      cy.get(
        "li.oxd-topbar-body-nav-tab.--parent span.oxd-topbar-body-nav-tab-item"
      )
        .contains("Entitlements")
        .click();
      cy.xpath(`//ul[@class='oxd-dropdown-menu']/li[1]/a`).click();
      cy.xpath(userSuggestion).type("Indah Mutiah");
      cy.wait(2000);
      cy.xpath(userSuggestionResult).click();
      cy.xpath(dropdownLeave).click();
      cy.xpath(`//div[@role='listbox']//div[@role='option'][5]`).click();
      cy.xpath(`//label[text()='Entitlement']/following::input[1]`).type(12);
      cy.xpath(buttonSave).click();

      cy.xpath(`//button[normalize-space()='Confirm']`).click();
    });
  });
});
