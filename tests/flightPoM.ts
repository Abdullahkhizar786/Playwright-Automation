import { Page, expect } from "@playwright/test";

export class Flightpom {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async toOpensite() {
    await this.page.goto("https://www.flightnetwork.com/");
    await expect(this.page).toHaveURL("https://us-en.flightnetwork.com/?ibe.mass=1");
    await expect(this.page.getByRole("button", { name: "Accept All" })).toBeVisible();
  }

  async acceptcookies() {
    await this.page.getByRole("button", { name: "Accept All" }).click();
    await expect(this.page.getByRole("button", { name: "Accept All" })).not.toBeVisible();
  }
  async toclicksignup() {
    await this.page.getByTestId("siteHeader").getByTestId("myBookings-button-large").click();
    await this.page.locator('iframe[title="Sign in with Google Button"]').contentFrame().getByLabel("Sign in with Google").click();
  }
  async tocheckflight(from: string, to: string, departdate: string, returndate: string) {
    await this.page.goto("https://www.flightnetwork.com/");
    await expect(this.page).toHaveURL("https://us-en.flightnetwork.com/?ibe.mass=1");
    // await this.page.getByRole("button", { name: "Accept All" }).click();
    await this.page.waitForTimeout(3000);
    await this.page.locator('input[id="searchForm-singleBound-origin-input"]').fill(from);
    await this.page.waitForTimeout(8000);
    await this.page.locator("#react-select-4-option-0").click();
    await this.page.waitForTimeout(3000);
    await expect(this.page.locator('input[id="searchForm-singleBound-origin-input"]')).toBeVisible();
    await this.page.locator('input[id="searchForm-singleBound-destination-input"]').fill(to);
    await this.page.waitForTimeout(8000);
    await this.page.locator("#react-select-7-option-1").click();
    await expect(this.page.locator('input[id="searchForm-singleBound-destination-input"]')).toBeVisible();
    await this.page.getByTestId("singleBound.departureDate-input").click();
    await this.page.getByRole("gridcell", { name: departdate }).click();
    await this.page.getByLabel("Go to next month").click();
    await this.page.getByRole("gridcell", { name: returndate }).nth(0).click();
    await this.page.getByTestId("searchForm-passengers-dropdown").click();
    await this.page.getByTestId("adults-passengers-add").click();
    await this.page.getByTestId("children-passengers-add").click();
    await this.page.getByTestId("searchForm-cabinClasses-dropdown").click();
    await this.page.getByRole("option", { name: "First" }).click();
    await expect(this.page.getByText("Search flights")).toBeVisible();
    await this.page.getByTestId("searchForm-searchFlights-button").click();
    await this.page.waitForTimeout(3000);
  }
}
