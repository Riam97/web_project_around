import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._confirmDeleteButton = document.querySelector(".popup__delete-card");
  }

  setDeleteHandler(deleteHandler) {
    this._deleteHandler = deleteHandler;
    if (this._confirmButton) {
      this._handleConfirm = (event) => {
        event.preventDefault();
        this._deleteHandler();
        this.close();
      };
      this._confirmButton.addEventListener("click", this._handleConfirm);
    }
  }

  setEventListeners() {
    super.setEventListeners();
    if (this._confirmDeleteButton) {
      this._confirmDeleteButton.addEventListener("click", (evt) => {
        evt.preventDefault();
        if (this._deleteHandler) {
          this._deleteHandler();
        }
        this.close();
      });
    }
  }
}
