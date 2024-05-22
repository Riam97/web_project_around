const template = document.querySelector(".cards__template");

export default class Card {
  constructor(data, cardSelector, handleOpenImage) {
    this._cardSelector = cardSelector;
    this._handleOpenImage = handleOpenImage;
    this._image = data.link;
    this._title = data.name;
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".card__image");
  }

  _getTemplate() {
    const cardElement = template.content.querySelector(".card").cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLikeButton();
      });
    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteButton();
      });
    this._cardImage.addEventListener("click", () => {
      this._handleOpenImage(this._image, this._title);
    });
  }

  _handleLikeButton() {
    this._element
      .querySelector(".card__like-button")
      .classList.toggle("active");
  }

  _handleDeleteButton() {
    this._element.remove();
  }
  generateCard() {
    this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".card__image").src = this._image;
    this._element.querySelector(".card__title").textContent = this._title;
    this._element.querySelector(".card__image").alt = this._title;

    return this._element;
  }
}
