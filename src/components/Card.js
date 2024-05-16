const template = document.querySelector(".cards__template");
class Card {
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
}

export class InitialCards extends Card {
  constructor(data, cardSelector, handleOpenImage) {
    super(data, cardSelector, handleOpenImage);
    this._image = data.link;
    this._imageAlt = data.name;
    this._title = data.name;
  }

  generateCard() {
    super._getTemplate();
    super._setEventListeners();

    this._element.querySelector(".card__image").src = this._image;
    this._element.querySelector(".card__title").textContent = this._title;
    this._element.querySelector(".card__title").alt = this._imageAlt;

    return this._element;
  }
}

export class NewCard extends Card {
  constructor(data, cardSelector, handleOpenImage) {
    super(data, cardSelector, handleOpenImage);

    this._image = data.link;
    this._title = data.name;
  }

  generateCard() {
    this._element = super._getTemplate();
    super._setEventListeners();

    this._element.querySelector(".card__image").src = this._image;
    this._element.querySelector(".card__title").textContent = this._title;

    document.querySelector(".cards").appendChild(this._element);

    return this._element;
  }
}
