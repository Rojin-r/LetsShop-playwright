import { Page, Locator } from "@playwright/test";

export class RegisterPage {
  private firstNameInput: Locator;
  private lastNameInput: Locator;
  private emailInput: Locator;
  private phoneNumberInput: Locator;
  private occupationDropdown: Locator;
  private genderRadioButton: Locator;
  private passwordInput: Locator;
  private confirmPasswordInput: Locator;
  private iAm18orOlderCheckbox: Locator;
  private registerButton: Locator;

  constructor(page: Page) {
    this.firstNameInput = page.locator("#firstName");
    this.lastNameInput = page.locator("#lastName");
    this.emailInput = page.locator("#userEmail");
    this.phoneNumberInput = page.locator("#userMobile");
    this.occupationDropdown = page.locator(
      'select[formcontrolname="occupation"]',
    );
    this.genderRadioButton = page.locator('input[type="radio"]');
    this.passwordInput = page.locator("#userPassword");
    this.confirmPasswordInput = page.locator("#confirmPassword");
    this.iAm18orOlderCheckbox = page.locator(
      'input[formcontrolname="required"]',
    );
    this.registerButton = page.locator('input[value="Register"]');
  }

  async registerNewAccount(
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    occupation: string,
    gender: string,
    password: string,
  ) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.phoneNumberInput.fill(phoneNumber);
    await this.occupationDropdown.selectOption(occupation);
    // await this.genderRadioButton.filter({ hasText: gender }).check();
    await this.genderRadioButton
      .filter({ hasText: gender })
      .locator('input[type="radio"]')
      .check();
    await this.passwordInput.fill(password);
    await this.confirmPasswordInput.fill(password);
    await this.iAm18orOlderCheckbox.check();
    await this.registerButton.click();
  }
}
