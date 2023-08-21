import { test, expect } from "@playwright/test";
import { GetStartedPage } from "./pages/get-started.page";
import { HomePage } from "./pages/home.page";

test("test", async ({ page }) => {
  const getStartedPage = new GetStartedPage(page);
  const homePage = new HomePage(page);

  await page.goto("http://localhost:3000/");
  await getStartedPage.createBoard("Nemanja2");
  await homePage.createList("List 1");
  await homePage.createCard("Kartica 1");

  await expect(homePage.cardText).toHaveText("Kartica 1");

  await homePage.deleteBoard();
  await expect(homePage.boardDeletionPopup).toBeVisible();
});
