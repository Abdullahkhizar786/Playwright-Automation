import { Page, expect } from "@playwright/test";
import { Flocator } from "./Flocators";
export class Flightpom {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async toOpensite() {
    await this.page.goto(Flocator.link);
    await expect(this.page.url()).toContain("flightnetwork");
  }

  async acceptcookies() {
    await this.page.locator(Flocator.Acceptall).click();
    await expect(this.page.locator(Flocator.Acceptall)).not.toBeVisible();
  }
  async toclicksignup() {
    await this.page.locator(Flocator.mybookingbutton).click();
    await this.page.locator(Flocator.togetsignup).click();
  }
  async tocheckflight(from: string, to: string, departdate: string, returndate: string) {
    await this.page.goto(Flocator.link);
    await this.page.waitForTimeout(3000);
    await this.page.locator(Flocator.lfrom).fill(from);
    await this.page.waitForTimeout(8000);
    await this.page.locator(Flocator.Lhr).click();
    await this.page.waitForTimeout(3000);
    await expect(this.page.locator(Flocator.lfrom)).toBeVisible();
    await expect(this.page.locator(Flocator.AlAss).nth(0)).toContainText("Lahore");
    await this.page.locator(Flocator.lto).fill(to);
    await this.page.waitForTimeout(8000);
    await this.page.locator(Flocator.kara).click();
    await expect(this.page.locator(Flocator.lto)).toBeVisible();
    await this.page.waitForTimeout(4000);
    await expect(this.page.locator(Flocator.AlAss).nth(1)).toContainText("Al Kharj");
    await this.page.locator(Flocator.deptdate).click();
    await this.page.getByRole("gridcell", { name: departdate }).click();
    await this.page.waitForTimeout(3000);
    await expect(this.page.locator(Flocator.DAss).nth(0)).toHaveValue("2025-01-31");
    await this.page.getByLabel("Go to next month").click();
    await this.page.getByRole("gridcell", { name: returndate }).nth(0).click();
    await expect(this.page.locator(Flocator.DAss).nth(1)).toHaveValue("2025-02-02");
    await this.page.locator(Flocator.selectpss).click();
    await this.page.locator(Flocator.addadult).nth(0).click();
    await this.page.locator(Flocator.addchild).nth(1).click();
    await this.page.locator(Flocator.class).click();
    await this.page.getByRole("option", { name: "First" }).click();
    await expect(this.page.getByText("Search flights")).toBeVisible();
    await this.page.locator(Flocator.searchflights).click();
    //await this.page.waitForTimeout(3000);
  }
  async rentalcars(loc: string, pickdate: string) {
    await this.page.goto(Flocator.link);
    await this.page.waitForTimeout(3000);
    await this.page.locator(Flocator.Rentcars).nth(1).click();
    // await this.page.getByTestId("menu-link-Rental car").click();
    await this.page.waitForTimeout(3000);
    await this.page.locator(Flocator.pickupCar).fill(loc);
    await this.page.locator(Flocator.SearchC).nth(0).click();
    // await this.page.getByRole("button", { name: "City Lahore Lahore, Punjab" }).click();

    // await this.page.goto(Flocator.link);
    // await this.page.waitForTimeout(3000);
    // await this.page.locator(Flocator.Rentcars).nth(2).click();
    // // await this.page.locator(Flocator.pickupCar).fill(loc);
    // await this.page.waitForTimeout(3000);
    // await this.page.getByTestId('input[id="searchbox-toolbox-fts-pickup"]').fill(loc);
    // // await this.page.locator('input[id="searchbox-toolbox-fts-pickup"]').fill(loc);
    // await this.page.waitForTimeout(3000);
    // await expect(this.page.locator('input[id="searchbox-toolbox-fts-pickup"]')).toHaveValue(loc);
    // await this.page.getByTestId("searchbox-toolbox-date-picker-pickup-date").click();
    // await this.page.getByLabel(pickdate, { exact: true }).click();
    // await this.page.getByTestId("searchbox-toolbox-submit-button").click();
    // await this.page.waitForTimeout(4000);
    // await expect(this.page.getByRole("heading", { name: "Let's confirm you are human" })).toBeVisible();
  }
}
