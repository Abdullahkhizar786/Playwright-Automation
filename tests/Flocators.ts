import { Page, expect } from "@playwright/test";
export const Flocator = {
  //   private page: Page;

  //   constructor(page: Page) {
  //     this.page = page;
  //   }
  link: "https://www.flightnetwork.com/",
  Alink: "https://us-en.flightnetwork.com/?ibe.mass=1",
  Acceptall: 'role=button[name="Accept All"]',
  mybookingbutton: "data-testid=siteHeader >> data-testid=myBookings-button-large",
  togetsignup: 'iframe[title="Sign in with Google Button"]',
  lfrom: 'input[id="searchForm-singleBound-origin-input"]',
  lto: 'input[id="searchForm-singleBound-destination-input"]',
  Lhr: "#react-select-4-option-0",
  kara: "#react-select-7-option-1",
  deptdate: '[id="singleBound.departureDate"]',
  selectpss: '[class="css-3q0md5"]',
  addadult: '[class="css-vqwtyu"]',
  addchild: '[class="css-vqwtyu"]',
  class: '[class="_1l9hnubc _1l9hnubb"]',
  searchflights: '[data-testid="searchForm-searchFlights-button"]',
};
