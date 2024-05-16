import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._image = this._popup.querySelector(".popup__card-image");
    this._title = this._popup.querySelector(".popup__card-title");
    console.log(this._image);
  }

  _handleImagePopup(link, title) {
    this._image.src = link;
    this._title.textContent = title;
  }

  open() {
    super.open();
  }

  setEventListeners() {
    document.querySelector(".card__image").addEventListener("click", () => {
      this._handleImagePopup(link, title);
    });
  }
}
