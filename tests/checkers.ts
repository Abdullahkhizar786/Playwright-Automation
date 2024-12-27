import { Page, expect } from "@playwright/test";

export class CheckersPOM {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
 }
    async ToOpengame() {
        await this.page.goto("https://www.gamesforthebrain.com/game/checkers/")
    }
    
    async toPlay(from: string, to:string){
        await this.page.locator(`[name="${from}"]`).click();
        await this.page.locator(`[name="${to}"]`).click();
    }

    async toverify (to: string, expectedsrc: string){
        await expect(this.page.locator(`[name="${to}"]`)).toHaveAttribute("src", 'you1.gif');

    }
    async wait(timeout: number =5000){
        await this.page.waitForTimeout(timeout);  
    }
}
