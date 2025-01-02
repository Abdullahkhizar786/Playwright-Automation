import { test } from "@playwright/test";
import { Flightpom } from "./flightPoM";
test.describe("Flight Network", () => {
  test("Complete", async ({ page }) => {
    test.setTimeout(100000);
    const flightpom = new Flightpom(page);
    await flightpom.toOpensite();
    await flightpom.acceptcookies();
    await flightpom.toclicksignup();
    await flightpom.tocheckflight("Lahor", "Karach", "31", "2");
    await flightpom.rentalcars("Lahore", "1 January 2025");
  });
});
