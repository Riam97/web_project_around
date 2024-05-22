import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._image = this._popup.querySelector(".popup__card-image");
    this._title = this._popup.querySelector(".popup__card-title");
  }

  _handleImagePopup(link, title) {
    this._image.src = link;
    this._image.alt = title;
    this._title.textContent = title;
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
  }
}
