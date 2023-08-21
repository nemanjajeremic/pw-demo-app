import { type Locator, type Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly listTitleInput: Locator;
  readonly addListbutton: Locator;
  readonly newCardButton: Locator;
  readonly cardTitleInput: Locator;
  readonly addCardButton: Locator;
  readonly cardText: Locator;
  readonly boardOptionsButton: Locator;
  readonly deleteBoardButton: Locator;
  readonly boardDeletionPopup: Locator;
  constructor(page: Page) {
    this.page = page;
    this.listTitleInput = page.getByPlaceholder("Enter list title...");
    this.addListbutton = page.getByRole("button", { name: "Add list" });
    this.newCardButton = page.locator('[data-cy="new-card"]');
    this.cardTitleInput = page.getByPlaceholder(
      "Enter a title for this card..."
    );
    this.addCardButton = page.getByRole("button", { name: "Add card" });
    this.cardText = page.locator('[data-cy="card-text"]');
    this.boardOptionsButton = page.locator('[data-cy="board-options"]');
    this.deleteBoardButton = page.locator('[data-cy="delete-board"]');
    this.boardDeletionPopup = page.getByText("Board was deleted");
  }

  async createList(listName: string) {
    await this.listTitleInput.click();
    await this.listTitleInput.fill(listName);
    await this.addListbutton.click();
  }

  async createCard(cardName: string) {
    await this.newCardButton.click();
    await this.cardTitleInput.fill(cardName);
    await this.addCardButton.click();
  }

  async deleteBoard() {
    await this.boardOptionsButton.click();
    await this.deleteBoardButton.click();
  }
}
