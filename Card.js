class Card {
  constructor(cardSelector) {
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    this._element = cardElement;

    return this._element;
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
    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleImagePopup(this._image, this._title);
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

  _handleImagePopup(src, title) {
    const imagePopupElement = document.querySelector("#popup__images");
    imagePopupElement.classList.add("popup__opened");
    imagePopupElement.querySelector(".popup__card-image").src = src;
    imagePopupElement.querySelector(".popup__card-title").textContent = title;
  }
}

export class InitialCards extends Card {
  constructor(data, cardSelector) {
    super(cardSelector);
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
  constructor(data, cardSelector) {
    super(cardSelector);

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
