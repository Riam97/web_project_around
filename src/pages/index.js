import PopupWithForms from "../components/PopupWithForms.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import { InitialCards, NewCard } from "../components/Card.js";
import {
  initialCards,
  popupSelector,
  profileFormElement,
  addCardFormElement,
} from "../utils/constants.js";

const addCardFormValidator = new FormValidator(addCardFormElement);
addCardFormValidator.enableValidation();

const renderElements = () => {
  const cardSection = new Section(
    {
      data: initialCards,
      renderer: (item) => {
        const card = new InitialCards(item, ".cards__template");
        const cardElement = card.generateCard();
        cardSection.addItems(cardElement);
      },
    },
    ".cards"
  );

  cardSection.renderItems();
};

renderElements();

addCardFormElement.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const newCardData = {
    link: addCardFormElement.querySelector(".popup__input-image").value,
    name: addCardFormElement.querySelector(".popup__input-title").value,
  };

  const newCard = new NewCard(newCardData, ".cards__template");
  const cardElement = newCard.generateCard();

  const cardSection = document.querySelector(".cards");
  cardSection.prepend(cardElement);

  addCardFormValidator.enableValidation();
});
const imagePopup = new PopupWithImage("#popup__images");

const profilePopup = new PopupWithForms("#popup__profile", (formData) => {
  const userInfo = new UserInfo({
    nameSelector: ".profile__name",
    occupationSelector: ".profile__occupation",
  });

  userInfo.setUserInfo(formData);
});

const profileFormValidator = new FormValidator(profileFormElement);
profileFormValidator.enableValidation();

const addCardPopup = new PopupWithForms("#popup__add-card", (formData) => {});

document
  .querySelector(".profile__edit-button")
  .addEventListener("click", () => {
    profilePopup.open();
  });

document
  .querySelector(".profile__button-add-card")
  .addEventListener("click", () => {
    addCardPopup.open();
  });

/* export function openProfilePopup() {
  editPopupElement.classList.add("popup__opened");
  popupName.value = profileNameElement.textContent;
  popupOccupation.value = profileOccupationElement.textContent;
} */
/*
export function openAddCardPopup() {
  addCardPopupElement.classList.add("popup__opened");
}

export function closePopup() {
  if (editPopupElement.classList.contains("popup__opened")) {
    editPopupElement.classList.remove("popup__opened");
  }
  if (addCardPopupElement.classList.contains("popup__opened")) {
    addCardPopupElement.classList.remove("popup__opened");
  }
  if (imagePopupElement.classList.contains("popup__opened")) {
    imagePopupElement.classList.remove("popup__opened");
  }
}

export function handleFormSubmit(evt) {
  evt.preventDefault();
  profileNameElement.textContent = popupName.value;
  profileOccupationElement.textContent = popupOccupation.value;
  closePopup();
}

export function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    closePopup();
  }
}

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
 */

/* //comentado desde aca
const profileFormValidation = document.querySelectorAll('form[name="form"]');
profileFormValidation.forEach((formElement) => {
  const validation = new FormValidator(formElement);
  validation.enableValidation();
});

const addCardValidation = new FormValidator(addCardFormElement);
addCardValidation.enableValidation();

const renderElements = () => {
  document.querySelector(".cards").innerHTML = "";
  initialCards.forEach((item) => {
    const card = new InitialCards(item, ".cards__template");
    const cardElement = card.generateCard();
    document.querySelector(".cards").appendChild(cardElement);
  });
};

renderElements();

addCardFormElement.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const newCardData = {
    link: inputImage.value,
    name: inputTitle.value,
  };
  const newCard = new NewCard(newCardData, ".cards__template");
  const cardElement = newCard.generateCard();

  document.querySelector(".cards").prepend(cardElement);
  closePopup();
});
 */
