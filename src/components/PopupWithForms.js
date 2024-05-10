import Popup from "./Popup.js";

export default class PopupWithForms extends Popup {
  constructor(popupSelector, formSubmitHandler) {
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__form");
    this._formSubmitHandler = formSubmitHandler;
    // console.log(this._form);
  }
  _getInputValues() {
    this._formInputs = this._form.querySelectorAll(".popup__input");
    this._formInputValues = {};
    this._formInputs.forEach((input) => {
      console.log(input);
      this._formInputValues[input.name] = input.value;
    });
    return this._formInputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const formData = this._getInputValues();
      this._formSubmitHandler(formData);
      this.close();
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
