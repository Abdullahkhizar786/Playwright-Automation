import { test, expect } from "@playwright/test";
test.describe("Task no 1", () => {
  test("checkers", async ({ page }) => {
    test.setTimeout(90000);
    await page.goto("https://www.gamesforthebrain.com/game/checkers/");
    await page.waitForTimeout(5000);
    await page.locator('[name="space62"]').click();
    await page.locator('[name="space73"]').click();
    await page.waitForTimeout(5000);
    await expect(page.locator('[name="space73"]')).toHaveAttribute("src", "you1.gif");
    await page.locator('[name="space71"]').click();
    await page.locator('[name="space62"]').click();
    await page.waitForTimeout(5000);
    await expect(page.locator('[name="space62"]')).toBeVisible();
    await page.locator('[name="space42"]').click();
    await page.locator('[name="space53"]').click();
    await page.waitForTimeout(5000);
    await expect(page.locator('[name="space53"]')).toHaveAttribute("src", "you1.gif");
    await page.locator('[name="space31"]').click();
    await page.locator('[name="space42"]').click();
    await page.waitForTimeout(5000);
    await expect(page.locator('[name="space42"]')).toHaveAttribute("src", "you1.gif");
    await page.locator('[name="space02"]').click();
    await page.locator('[name="space13"]').click();
    await page.waitForTimeout(5000);
    await expect(page.locator('[name="space13"]')).toHaveAttribute("src", "you1.gif");
    await page.locator('[name="space13"]').click();
    await page.locator('[name="space04"]').click();
    await page.waitForTimeout(5000);
    await expect(page.locator('[name="space04"]')).toHaveAttribute("src", "you1.gif");
    await page.locator('[name="space40"]').click();
    await page.locator('[name="space31"]').click();
    await page.waitForTimeout(5000);
    await expect(page.locator('[name="space31"]')).toHaveAttribute("src", "you1.gif");
    await page.locator('[name="space60"]').click();
    await page.locator('[name="space71"]').click();
    await page.waitForTimeout(5000);
    await expect(page.locator('[name="space71"]')).toHaveAttribute("src", "you1.gif");
    await page.locator('[name="space53"]').click();
    await page.locator('[name="space35"]').click();
    await page.waitForTimeout(5000);
    await expect(page.locator('[name="space35"]')).toHaveAttribute("src", "you1.gif");
    await page.locator('[name="space04"]').click();
    await page.locator('[name="space15"]').click();
    await page.waitForTimeout(5000);
    await expect(page.locator('[name="space15"]')).toHaveAttribute("src", "you1.gif");
    await page.locator('[name="space42"]').click();
    await page.locator('[name="space53"]').click();
    await page.waitForTimeout(5000);
    await expect(page.locator('[name="space53"]')).toHaveAttribute("src", "you1.gif");
    await page.locator('[name="space22"]').click();
    await page.locator('[name="space13"]').click();
    await page.waitForTimeout(5000);
    await expect(page.locator('[name="space13"]')).toHaveAttribute("src", "you1.gif");
    await page.locator('[name="space15"]').click();
    await page.locator('[name="space26"]').click();
    await page.waitForTimeout(5000);
    await expect(page.locator('[name="space26"]')).toHaveAttribute("src", "you1.gif");
    await page.locator('[name="space26"]').click();
    await page.locator('[name="space37"]').click();
    await page.waitForTimeout(5000);
    await expect(page.locator('[name="space37"]')).toHaveAttribute("src", "you1k.gif");
  });
});
