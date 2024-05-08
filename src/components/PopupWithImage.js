import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._image = this._popup.querySelector(".popup__card-image");
    this._title = this._popup.querySelector(".popup__card-title");
    // console.log(this._image);
  }

  open(link, name) {
    super.open();
    this._image.src = link;
    this._image.alt = name;
    this._title.textContent = name;
  }
  close() {
    super.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.querySelector(".card__image").addEventListener("click", () => {
      this.open(this._image.src, this._title.textContent);
    });
  }
}
