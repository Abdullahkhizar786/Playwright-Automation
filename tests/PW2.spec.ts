import { test, expect } from "@playwright/test";

test.describe('Task no 1',() => {
test("Demo qa", async ({ page }) => {
  await page.goto("https://demoqa.com/");
  await expect(page).toHaveURL("https://demoqa.com/");
  await page.getByRole("heading", { name: "Elements" }).click();
  const text = await page.getByText("Text Box");
  await expect(text).toBeVisible();
  await text.click();
  await page.locator("li").filter({ hasText: "Check Box" }).click();
  await page.locator("li").filter({ hasText: "Web Tables" }).click();
  await page.getByRole("button", { name: "Add" }).click();

  const FirstName = await page.getByPlaceholder("First Name");
  await expect(FirstName).toBeVisible();
  await FirstName.fill("Abdullah");
  await expect(FirstName).toHaveValue("Abdullah");

  //   await page.getByPlaceholder("First Name").fill("Abdullah");
  await page.getByPlaceholder("Last Name").fill("Khizar");
  expect("Khizar").toBeTruthy();

  await page.getByPlaceholder("name@example.com").fill("Abdullahkhizar@gmail.com");
  expect('Abdullahkhizar@gmail.com').toBeTruthy()
  await page.getByPlaceholder("Age").fill("32");
  expect("32").toBeTruthy();
  await page.getByPlaceholder("Salary").fill("2222");
  expect("2222").toBeTruthy();
  await page.getByPlaceholder("Department").fill("QA Automation");
  expect("QA Automation").toBeTruthy();
  const Button = await page.getByRole("button", { name: "Submit" });
  await expect(Button).toBeVisible();
  await Button.click();

});
})