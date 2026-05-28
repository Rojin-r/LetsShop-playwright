import { Page, Locator } from "@playwright/test";

export class dashBoardPage {
  private productList: Locator;
  private ordersLink: Locator;
  private cartLink: Locator;
  private signOutButton: Locator;

  constructor(page: Page) {
    this.productList = page.locator("#products .card-body");
    this.ordersLink = page.locator('button[routerlink="/dashboard/myorders"]');
    this.cartLink = page.locator('button[routerlink="/dashboard/cart"]');
    this.signOutButton = page.locator('button:has-text("Sign Out")');
  }
  async addProductToCart(productName: string) {
    await this.productList
      .filter({ hasText: productName })
      .getByRole("button", { name: " Add To Cart" })
      .click();
  }
  async clickOrdersLink() {
    await this.ordersLink.click();
  }

  async clickCartLink() {
    await this.cartLink.click();
  }

  async clickSignOutButton() {
    await this.signOutButton.click();
  }
}
