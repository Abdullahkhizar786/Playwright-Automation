import { test, expect } from "@playwright/test";

test.describe("Flight Network", () => {
  test.setTimeout(100000);
  test("TC01", async ({ page }) => {
    await page.goto("https://www.flightnetwork.com/");
    await expect(page).toHaveURL("https://us-en.flightnetwork.com/?ibe.mass=1");
    await page.getByRole("button", { name: "Accept All" }).click();
    await page.waitForTimeout(5000);
    await page.getByTestId("siteHeader").getByTestId("myBookings-button-large").click();
    await page.waitForTimeout(3000);
    await page.locator('iframe[title="Sign in with Google Button"]').contentFrame().getByLabel("Sign in with Google").click();
    await page.waitForTimeout(3000);
  });
  test("TC02", async ({ page }) => {
    await page.goto("https://www.flightnetwork.com/");
    await expect(page).toHaveURL("https://us-en.flightnetwork.com/?ibe.mass=1");
    await page.getByRole("button", { name: "Accept All" }).click();
    await page.waitForTimeout(3000);
    await page.locator('input[id="searchForm-singleBound-origin-input"]').fill("Lahore");
    await page.locator("#react-select-4-option-0").click();
    await page.locator('input[id="searchForm-singleBound-destination-input"]').fill("Karachi");
    await page.locator("#react-select-7-option-1").click();
    await page.waitForTimeout(3000);
    await page.getByTestId("singleBound.departureDate-input").click();
    await page.getByRole("gridcell", { name: "31" }).click();
    await page.waitForTimeout(3000);
    await page.getByLabel("Go to next month").click();
    await page.getByRole("gridcell", { name: "2", exact: true }).click();
    await page.getByTestId("searchForm-passengers-dropdown").click();
    await page.getByTestId("adults-passengers-add").click();
    await page.getByTestId("children-passengers-add").click();
    await page.getByTestId("searchForm-cabinClasses-dropdown").click();
    await page.getByRole("option", { name: "First" }).click();
    await page.getByTestId("searchForm-searchFlights-button").click();
    await page.waitForTimeout(3000);
  });
  test("TC03", async ({ page }) => {
    await page.goto("https://www.flightnetwork.com/");
    await expect(page).toHaveURL("https://us-en.flightnetwork.com/?ibe.mass=1");
    await page.getByRole("button", { name: "Accept All" }).click();
    await page.getByTestId("menu-link-Rental car").click();
    await page.locator('input[id="searchbox-toolbox-fts-pickup"]').fill("Lahore");
    await page.getByTestId("searchbox-toolbox-date-picker-pickup-date").click();
    await page.getByLabel("1 January 2025", { exact: true }).click();
    await page.locator('[id="searchbox-toolbox-pickup-time"]').click();
    await page.waitForTimeout(3000);
    await page.getByTestId("searchbox-toolbox-submit-button").click();
    await page.waitForTimeout(3000);
    await page.getByRole("button", { name: "Begin begin" }).click();
    await page.waitForTimeout(3000);

  });
  test("TC04", async ({ page }) => {
    await page.goto("https://www.flightnetwork.com/");
    await expect(page).toHaveURL("https://us-en.flightnetwork.com/?ibe.mass=1");
    await page.getByRole("button", { name: "Accept All" }).click();
    await page.getByTestId("menu-link-Hotels").click();
    await page.waitForTimeout(3000);
    await page.waitForTimeout(5000);
    await page.getByLabel("Dismiss sign-in info.").click();
    await page.locator("#cars").click();
  });
});
