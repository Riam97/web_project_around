import "./index.css";
import PopupWithForms from "../components/PopupWithForms.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import {
  initialCards,
  profileFormElement,
  addCardFormElement,
} from "../utils/constants.js";
import Api from "../components/Api.js";

export const api = new Api("https://around.nomoreparties.co/v1/web_es_12", {
  authorization: "50b6f104-4531-48f6-93b8-d385b9bebae9",
  "Content-Type": "application/json",
});

const imagePopup = new PopupWithImage("#popup__images");
imagePopup.setEventListeners();

const addCardFormValidator = new FormValidator(addCardFormElement);
addCardFormValidator.enableValidation();

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  occupationSelector: ".profile__occupation",
  avatarSelector: ".profile__avatar",
});

const profilePopup = new PopupWithForms("#popup__profile", (formData) => {
  console.log(formData);
  api.editProfile(formData.name, formData.about).then((user) => {
    userInfo.setUserInfo({
      name: user.name,
      about: user.about,
    });
  });
});

api.getUserInfo().then((user) => {
  console.log(user);
  userInfo.setUserInfo({
    name: user.name,
    about: user.about,
    avatar: user.avatar,
  });

  function createCard(item) {
    const card = new Card(
      item,

      ".cards__template",
      (link, name) => {
        imagePopup._handleImagePopup(link, name);
      },
      api,
      user._id
    );
    const cardElement = card.generateCard();
    return cardElement;
  }

  api
    .getInitialCards()
    .then((cardsArray) => {
      const renderElements = () => {
        const cardSection = new Section(
          {
            data: cardsArray,
            renderer: (item) => {
              const card = createCard(item);
              cardSection.addItems(card);
            },
          },
          ".cards"
        );

        cardSection.renderItems();
        const addCardPopup = new PopupWithForms(
          "#popup__add-card",
          (formData) => {
            console.log(formData);
            api.addCard(formData.name, formData.link).then((item) => {
              const newCard = createCard(item);

              cardSection.addCard(newCard);
            });
          }
        );
        addCardPopup.setEventListeners();
        document
          .querySelector(".profile__button-add-card")
          .addEventListener("click", () => {
            addCardPopup.open();
          });
      };

      renderElements();
    })
    .catch((error) => {
      console.error("Error al cargar las tarjetas", error);
    });
});

const profileFormValidator = new FormValidator(profileFormElement);
profileFormValidator.enableValidation();

addCardFormValidator.enableValidation();

document
  .querySelector(".profile__edit-button")
  .addEventListener("click", () => {
    profilePopup.open();
  });

export const confirmation = new PopupWithConfirmation("#popup__delete");
confirmation.setEventListeners();

//desde aqui avatarPopup
document.querySelector(".profile__avatar").addEventListener("click", () => {
  console.log("funcionando");
  avatarPopup.open();
});

const avatarPopup = new PopupWithForms("#popup__avatar", (formData) => {
  api.updateAvatar(formData.avatar).then((user) => {
    userInfo.setUserInfo({
      avatar: user.avatar,
    });
  });
});
avatarPopup.setEventListeners();
