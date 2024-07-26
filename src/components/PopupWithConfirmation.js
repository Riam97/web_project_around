import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._confirmDeleteButton = document.querySelector(".popup__delete-card");
  }

  setDeleteHandler(handler) {
    this._deleteHandler = handler;
  }

  setEventListeners() {
    super.setEventListeners();
    this._confirmDeleteButton.addEventListener("click", (evt) => {
      evt.preventDefault();
      this._deleteHandler();
    });
  }
}
