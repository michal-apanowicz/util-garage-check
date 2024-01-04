import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto(
    "https://interparking-pl.my.site.com/abonament/s/?id=a0A58000000D7pZ"
  );

  await page.locator("button[name=subscriptionsTypeId]").waitFor();
  await page.click(".slds-combobox__input");
  await page.locator(".slds-is-open").waitFor();
});

test("Hasn't P5 free spaces", async ({ page }) => {
  await page
    .getByText("Całodobowy P5 - pracownicy PLG (wyłącznie os. fiz.)")
    .click();

  await page.waitForLoadState("networkidle");

  await expect(
    page.getByText(
      "Obecnie nie posiadamy odpowiedniej ilości dostępnych miejsc parkingowych"
    )
  ).not.toBeAttached();
});

test("Hasn't Cargo free spaces", async ({ page }) => {
  await page
    .getByText("Całodobowy Cargo - pracownicy PLG (wyłącznie os. fiz.)")
    .click();

  await page.waitForLoadState("networkidle");

  await expect(
    page.getByText(
      "Obecnie nie posiadamy odpowiedniej ilości dostępnych miejsc parkingowych"
    )
  ).toBeAttached();
});
