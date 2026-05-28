import { Page, Locator } from "@playwright/test";

export class ForgotPasswordPage {
  private emailInput: Locator;
  private passwordInput: Locator;
  private confirmPasswordInput: Locator;
  private savePasswordButton: Locator;
  constructor(page: Page) {
    this.emailInput = page.getByPlaceholder("Enter your email address");
    this.passwordInput = page.locator("#userPassword");
    this.confirmPasswordInput = page.locator("#confirmPassword");
    this.savePasswordButton = page.getByRole("button", {
      name: "Save New Password",
    });
  }

  async createNewPassword(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.confirmPasswordInput.fill(password);
    await this.savePasswordButton.click();
  }
}
