import "./index.css";
import logoSrc from "../images/logoAround.png";
import avatarSrc from "../images/Avatar.png";
import editprofileSrc from "../images/vectorEditButton.png";
import addCardButtonSrc from "../images/addButton.png";
import closeButtonSrc from "../images/closeIcon.png";
import PopupWithForms from "../components/PopupWithForms.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import { InitialCards, NewCard } from "../components/Card.js";
import {
  initialCards,
  profileFormElement,
  addCardFormElement,
} from "../utils/constants.js";

const logo = document.getElementById("logo");
logo.src = logoSrc;
const avatar = document.getElementById("avatar");
avatar.src = avatarSrc;
const editButton = document.getElementById("edit-profile-button");
editButton.src = editprofileSrc;
const addButton = document.getElementById("add-card-button");
addButton.src = addCardButtonSrc;
const closeButton = document.getElementById("close-button");
closeButton.src = closeButtonSrc;
const closeButtonAddCard = document.getElementById("close-button-addCard");
closeButtonAddCard.src = closeButtonSrc;

const imagePopup = new PopupWithImage("#popup__images");
imagePopup.setEventListeners();

const addCardFormValidator = new FormValidator(addCardFormElement);
addCardFormValidator.enableValidation();

const renderElements = () => {
  const cardSection = new Section(
    {
      data: initialCards,
      renderer: (item) => {
        const card = new InitialCards(
          item,

          ".cards__template",
          (link, name) => {
            imagePopup._handleImagePopup(link, name);
          }
        );
        const cardElement = card.generateCard();
        cardSection.addItems(cardElement);
      },
    },
    ".cards"
  );

  cardSection.renderItems();
};

renderElements();

const profilePopup = new PopupWithForms("#popup__profile", (formData) => {
  console.log(formData);
  const userInfo = new UserInfo({
    nameSelector: ".profile__name",
    occupationSelector: ".profile__occupation",
  });

  userInfo.setUserInfo(formData);
});

const profileFormValidator = new FormValidator(profileFormElement);
profileFormValidator.enableValidation();

const addCardPopup = new PopupWithForms("#popup__add-card", (formData) => {
  const newCardData = {
    link: addCardFormElement.querySelector(".popup__input-image").value,
    name: addCardFormElement.querySelector(".popup__input-title").value,
  };

  const newCard = new NewCard(newCardData, ".cards__template", (link, name) => {
    imagePopup._handleImagePopup(link, name);
  });

  const cardElement = newCard.generateCard();

  const cardSection = document.querySelector(".cards");
  cardSection.prepend(cardElement);

  addCardFormValidator.enableValidation();
});

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

document.querySelector(".card__image").addEventListener("click", () => {
  imagePopup.open();
});
