import { test } from "@playwright/test";
import { CheckersPOM } from "./checkers";
test.describe("Checkers", () => {
  test("Checkers bt", async ({ page }) => {
    test.setTimeout(90000);
    const checkersPOM = new CheckersPOM(page); 
    await checkersPOM.ToOpengame();

    await checkersPOM.toPlay("space62", "space73");
    await checkersPOM.wait();
    await checkersPOM.toverify("space73", "you1.gif");

    await checkersPOM.toPlay("space71", "space62");
    await checkersPOM.wait();
    await checkersPOM.toverify("space62", "you1.gif");

    await checkersPOM.toPlay("space42", "space53");
    await checkersPOM.wait();
    await checkersPOM.toverify("space53", "you1.gif");

    await checkersPOM.toPlay("space31", "space42");
    await checkersPOM.wait();
    await checkersPOM.toverify("space42", "you1.gif");

    await checkersPOM.toPlay("space02", "space13");
    await checkersPOM.wait();
    await checkersPOM.toverify("space13", "you1.gif");

    await checkersPOM.toPlay("space13", "space04");
    await checkersPOM.wait();
    await checkersPOM.toverify("space04", "you1.gif");

    await checkersPOM.toPlay("space40", "space31");
    await checkersPOM.wait();
    await checkersPOM.toverify("space31", "you1.gif");

    await checkersPOM.toPlay("space60", "space71");
    await checkersPOM.wait();
    await checkersPOM.toverify("space71", "you1.gif");

    await checkersPOM.toPlay("space53", "space35");
    await checkersPOM.wait();
    await checkersPOM.toverify("space35", "you1.gif");

    await checkersPOM.toPlay("space04", "space15");
    await checkersPOM.wait();
    await checkersPOM.toverify("space15", "you1.gif");

    await checkersPOM.toPlay("space42", "space53");
    await checkersPOM.wait();
    await checkersPOM.toverify("space53", "you1.gif");

    await checkersPOM.toPlay("space22", "space13");
    await checkersPOM.wait();
    await checkersPOM.toverify("space13", "you1.gif");

    await checkersPOM.toPlay("space15", "space26");
    await checkersPOM.wait();
    await checkersPOM.toverify("space26", "you1.gif");

    await checkersPOM.toPlay("space26", "space37");
    await checkersPOM.wait();
    await checkersPOM.toverify("space37", "you1.gif");

    
  });
});
