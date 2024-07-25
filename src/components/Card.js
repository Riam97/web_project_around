//import { api } from "../pages/index.js";
import { confirmation } from "../pages/index.js";
const template = document.querySelector(".cards__template");

export default class Card {
  constructor(data, cardSelector, handleOpenImage, api) {
    this._cardSelector = cardSelector;
    this._handleOpenImage = handleOpenImage;
    this._image = data.link;
    this._title = data.name;
    this._id = data._id;
    this._likes = data.likes ?? [];
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".card__image");
    this.likesNumber = this._element.querySelector(".card__like-number");
    this._likeCount = this._likes.length;
    this.likesNumber.textContent = this._likeCount;
    this._api = api;

    this._isLiked = this._likes.some((like) => like.userId === "miIdDeUsuario");
    this._updateLikeButtonState();
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
    this.likeButton = this._element.querySelector(".card__like-button");
    const likeCard = this.likeButton.classList.contains("active");
    localStorage.setItem("likeButtonState", likeCard);
    this._api
      .likeCard(this._id, likeCard)
      .then((data) => {
        this._likeCount = data.likes.length;
        this.likesNumber.textContent = this._likeCount;
        this.likeButton.classList.toggle("active", !likeCard);
      })
      .catch((error) =>
        console.error("Error al actualizar el me gusta:", error)
      );
  }
  _updateLikeButtonState() {
    const likeButton = this._element.querySelector(".card__like-button");
    likeButton.classList.toggle("active", this._isLiked);
  }

  _handleDeleteButton(element) {
    confirmation.open();
    const confirmDelete = () => {
      const cardElement = element.target.closest(".card");
      const deleteButton = document.querySelector(".popup__confirm-button");
      deleteButton.textContent = "Eliminando...";
      this._api
        .deleteCard(this._id)
        .then(() => {
          cardElement.remove();
          deleteButton.textContent = "Si";
        })
        .catch((error) =>
          console.error("Error al eliminar la tarjeta:", error)
        );
    };
    confirmation.setDeleteHandler(confirmDelete);
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
