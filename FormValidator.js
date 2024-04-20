import { addCardFormElement } from "./index.js";

class FormValidator {
  constructor(formElement) {
    this._formElement = formElement;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(".popup__input")
    );
    this._buttonElement = this._formElement.querySelector(".popup__button");
  }

  _showInputError(formInput, errorMessage) {
    const formError = this._formElement.querySelector(`#${formInput.id}-error`);

    formInput.classList.add("popup__input-error");
    formError.textContent = errorMessage;
    formError.classList.add("popup__input-error_active");
  }

  _hideInputError(formInput) {
    const formError = this._formElement.querySelector(`#${formInput.id}-error`);

    formInput.classList.remove("popup__input-error");
    formError.classList.remove("popup__input-error_active");
    formError.textContent = "";
  }

  _isValid(formInput) {
    if (!formInput.validity.valid) {
      this._showInputError(formInput, formInput.validationMessage);
    } else {
      this._hideInputError(formInput);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((formInput) => {
      return !formInput.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add("popup__button_inactive");
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove("popup__button_inactive");
      this._buttonElement.disabled = false;
    }
  }

  setEventListener() {
    this._inputList.forEach((formInput) => {
      formInput.addEventListener("input", () => {
        this._isValid(formInput);
        this._toggleButtonState();
      });
    });
    this._toggleButtonState();
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      if (this._hasInvalidInput()) {
        evt.preventDefault();
      }
    });
    this.setEventListener();
  }
}

const profileFormValidation = document.querySelectorAll('form[name="form"]');
profileFormValidation.forEach((formElement) => {
  const validation = new FormValidator(formElement);
  validation.enableValidation();
});

const addCardValidation = new FormValidator(addCardFormElement);
addCardValidation.enableValidation();
