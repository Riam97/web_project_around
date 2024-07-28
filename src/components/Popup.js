export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }
  open() {
    this._popup.classList.add("popup__opened");
    this.setEventListeners();
  }
  close() {
    if (this._popup.classList.contains("popup__opened")) {
      this._popup.classList.remove("popup__opened");
    }
  }
  _handleEscPopup(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popup
      .querySelector(".popup__close-button")
      .addEventListener("click", () => {
        this.close();
      });
    this._popup.addEventListener("click", (evt) => {
      if (evt.target === evt.currentTarget) {
        this.close();
      }
    });
    document.addEventListener("keydown", (evt) => {
      this._handleEscPopup(evt);
    });
  }
}
