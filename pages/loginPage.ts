import { Page, Locator } from "@playwright/test";

export class LoginPage {
  private emailInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;
  private registerButton: Locator;
  private forgotPasswordLink: Locator;

  constructor(page: Page) {
    this.emailInput = page.locator("#userEmail");
    this.passwordInput = page.locator("#userPassword");
    this.loginButton = page.locator("#login");
    this.registerButton = page.locator("//a").filter({ hasText: "Register" });
    this.forgotPasswordLink = page
      .locator("//a")
      .filter({ hasText: "Forgot password?" });
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
  async clickRegisterButton() {
    await this.registerButton.click();
  }
  async clickForgotPasswordLink() {
    await this.forgotPasswordLink.click();
  }
}
