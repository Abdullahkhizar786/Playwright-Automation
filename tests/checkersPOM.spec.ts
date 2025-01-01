import { test } from "@playwright/test";
import { CheckersPOM } from "./checkers";
test.describe("Checkers", () => {
  test("Checkers bt", async ({ page }) => {
    test.setTimeout(100000);
    const checkersPOM = new CheckersPOM(page); 
    await checkersPOM.ToOpengame();

    await checkersPOM.toPlay("62", "73");
    await checkersPOM.wait();
    await checkersPOM.toverify("73", "you1.gif");

    await checkersPOM.toPlay("71", "62");
    await checkersPOM.wait();
    await checkersPOM.toverify("62", "you1.gif");

    await checkersPOM.toPlay("42", "53");
    await checkersPOM.wait();
    await checkersPOM.toverify("53", "you1.gif");

    await checkersPOM.toPlay("31", "42");
    await checkersPOM.wait();
    await checkersPOM.toverify("42", "you1.gif");

    await checkersPOM.toPlay("02", "13");
    await checkersPOM.wait();
    await checkersPOM.toverify("13", "you1.gif");

    await checkersPOM.toPlay("13", "04");
    await checkersPOM.wait();
    await checkersPOM.toverify("04", "you1.gif");

    await checkersPOM.toPlay("40", "31");
    await checkersPOM.wait();
    await checkersPOM.toverify("31", "you1.gif");

    await checkersPOM.toPlay("60", "71");
    await checkersPOM.wait();
    await checkersPOM.toverify("71", "you1.gif");

    await checkersPOM.toPlay("53", "35");
    await checkersPOM.wait();
    await checkersPOM.toverify("35", "you1.gif");

    await checkersPOM.toPlay("04", "15");
    await checkersPOM.wait();
    await checkersPOM.toverify("15", "you1.gif");

    await checkersPOM.toPlay("42", "53");
    await checkersPOM.wait();
    await checkersPOM.toverify("53", "you1.gif");

    await checkersPOM.toPlay("22", "13");
    await checkersPOM.wait();
    await checkersPOM.toverify("13", "you1.gif");

    await checkersPOM.toPlay("15", "26");
    await checkersPOM.wait();
    await checkersPOM.toverify("26", "you1.gif");

    await checkersPOM.toPlay("26", "37");
    await checkersPOM.wait();
    await checkersPOM.toverify("37", "you1k.gif");

    
  });
});
