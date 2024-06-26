import Popup from "./Popup.js";

export default class PopupWithForms extends Popup {
  constructor(popupSelector, formSubmitHandler) {
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__form");
    this._formSubmitHandler = formSubmitHandler;
    this._handleSubmit = this._handleSubmit.bind(this);
  }
  _getInputValues() {
    this._formInputs = this._form.querySelectorAll(".popup__input");
    this._formInputValues = {};
    this._formInputs.forEach((input) => {
      this._formInputValues[input.name] = input.value;
    });
    return this._formInputValues;
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    const formData = this._getInputValues();
    this._formSubmitHandler(formData);
    this.close();
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", this._handleSubmit);
  }

  close() {
    super.close();
    this._form.reset();
  }
}
