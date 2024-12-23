import { test, expect } from "@playwright/test";

test.describe("Task no 1", () => {
  test("TC01", async ({ page }) => {
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
    await page.getByPlaceholder("Last Name").fill("Khizar");
    expect("Khizar").toBeTruthy();
    await page.getByPlaceholder("name@example.com").fill("Abdullahkhizar@gmail.com");
    expect("Abdullahkhizar@gmail.com").toBeTruthy();
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
  test("TA02", async ({ page }) => {
    await page.goto("https://demoqa.com/");
    await page.getByRole("heading", { name: "Elements" }).click();
    await page.getByText("Broken Links - Images").click();
    await expect(page.locator("img").nth(3)).toBeVisible();
    await expect(page.locator("img").nth(3)).toBeVisible();
  });
  test("TC03", async ({ page }) => {
    await page.goto("https://demoqa.com/");
    await page.getByRole("heading", { name: "Forms" }).click();
    await page.getByText("Practice Form").click();
    await page.getByPlaceholder("First Name").fill("Abdullah");
    await page.getByPlaceholder("Last Name").fill("khizar");
    await page.getByPlaceholder("name@example.com").fill("khizar@gmail.com");
    await page.getByText("Male", { exact: true }).click();
    await page.getByPlaceholder("Mobile Number").fill("0987654323");
    await page.locator("#dateOfBirthInput").click();
    await page.locator(".react-datepicker__month-select").selectOption("January");
    await page.getByRole("combobox").nth(1).selectOption("2000");
    await page.getByLabel("Choose Saturday, January 15th,").click();
    const subjectsInput = page.locator('input[id="subjectsInput"]');
    await subjectsInput.type("Maths", { delay: 100 });
    await page.locator("#react-select-2-option-0").click();
    await page
      .locator("div")
      .filter({ hasText: /^Music$/ })
      .click();
    await page.locator('input[type="file"]').setInputFiles("C:/Users/PC/Downloads/image (4).png");
    await page.getByPlaceholder("Current Address").fill("lahore");
    await page.locator("#state svg").click();
    await page.getByText("Haryana").click();
    await page.locator("#city svg").click();
    await page.getByText("Panipat").click();
    await page.getByRole("button", { name: "Submit" }).click();
    await expect(page.getByText("Thanks for submitting the form")).toBeTruthy;
  });

  test("TC04", async ({ page }) => {
    await page.goto("https://demoqa.com/");
    await page.getByRole("heading", { name: "Widgets" }).click();
    await page.locator("li").filter({ hasText: "Progress Bar" }).click();
    await page.getByRole("button", { name: "Start" }).click();
    await page.waitForTimeout(9000);
    await page.getByText("%");
    expect("%").toBeTruthy();
  });
  test("TC05", async ({ page }) => {
    await page.goto("https://demoqa.com/");
    await page.getByRole("heading", { name: "Widgets" }).click();
    await page.locator("li").filter({ hasText: "Tool Tips" }).click();
    await page.getByRole("button", { name: "Hover me to see" }).hover();
    await page.getByText("You hovered over the Button");
    expect("You hovered over the Button").toBeTruthy;
  });
  test("TC06", async ({ page }) => {
    await page.goto("https://demoqa.com/");
    await page.getByRole("heading", { name: "Interactions" }).click();
    await page.locator("li").filter({ hasText: "Droppable" }).click();
    await page.locator("#draggable").dragTo(page.getByLabel("Simple").locator("#droppable"));
    expect(page.getByText("Dropped!")).toBeTruthy();
  });
});

