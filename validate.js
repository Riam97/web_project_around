formInput.classList.add("popup__input_error");
formError.textContent = errorMessage;
formError.classList.add("popup__input-error_active");

formInput.classList.remove("popup__input_error");
formError.classList.remove("popup__input-error_active");
formError.textContent = "";

const isValid = (formElement, formInput) => {
  if (!formInput.validity.valid) {
    showInputError(formElement, formInput, formInput.validationMessage);
  } else {
    hideInputError(formElement, formInput);
  }
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("popup__button_inactive");
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove("popup__button_inactive");
    buttonElement.disabled = false;
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));

  const buttonElement = formElement.querySelector(".popup__button");

  inputList.forEach((formInput) => {
    formInput.addEventListener("input", () => {
      isValid(formElement, formInput);

      toggleButtonState(inputList, buttonElement);
    });
  });
};

const hasInvalidInput = (inputList) => {
  return Array.from(inputList).some((formInput) => {
    return !formInput.validity.valid;
  });
};

const enableValidation = () => {
  forms.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      const formInputs = formElement.querySelectorAll(".popup__input");
      if (hasInvalidInput(formInputs)) {
        evt.preventDefault();
      }
    });
    setEventListeners(formElement);
  });
};

enableValidation();

function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    closePopup();
  }
}

document.addEventListener("keydown", closePopupEsc);

document.onclick = function (event) {
  if (event.target == editPopupElement) {
    editPopupElement.classList.remove("popup__opened");
  }
  if (event.target == addCardPopupElement) {
    addCardPopupElement.classList.remove("popup__opened");
  }
  if (event.target == imagePopupElement) {
    imagePopupElement.classList.remove("popup__opened");
  }
};
