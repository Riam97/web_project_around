import "./index.css";
import PopupWithForms from "../components/PopupWithForms.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import {
  initialCards,
  profileFormElement,
  addCardFormElement,
} from "../utils/constants.js";

const imagePopup = new PopupWithImage("#popup__images");
imagePopup.setEventListeners();

const addCardFormValidator = new FormValidator(addCardFormElement);
addCardFormValidator.enableValidation();

const renderElements = () => {
  const cardSection = new Section(
    {
      data: initialCards,
      renderer: (item) => {
        const card = new Card(
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

  const newCard = new Card(newCardData, ".cards__template", (link, name) => {
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

//desarrollo sprint 10 desde aquí
class Api {
  constructor() {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }
}

/* const api = new Api ({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_12/users/me", {
  method: "GET",
  headers: {
    authorization: "50b6f104-4531-48f6-93b8-d385b9bebae9",
    "Content-Type": "application/json"
  }
});

 api.getInitialCards()
   .then(cards => console.log(cards))
   .catch(err => console.error(err)); */

fetch("https://around.nomoreparties.co/v1/web_es_12/users/me", {
  method: "GET",
  headers: {
    authorization: "50b6f104-4531-48f6-93b8-d385b9bebae9",
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((result) => {
    console.log(result);
  });

fetch("https://around.nomoreparties.co/v1/web_es_12/cards", {
  method: "GET",
  headers: {
    authorization: "50b6f104-4531-48f6-93b8-d385b9bebae9",
  },
})
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  })
  .then((cardsArray) => {
    cardsArray.forEach((cardData) => {
      const card = new Card(cardData, ".cards__template", handleOpenImage);
      const cardElement = card.generateCard();
      document.querySelector(".cards-container").appendChild(cardElement);
    });
  })
  .catch((error) => {
    console.error("Error al cargar las tarjetas", error);
  });

fetch("https://around.nomoreparties.co/v1/web_es_12/users/me", {
  method: "PATCH",
  headers: {
    authorization: "c56e30dc-2883-4270-a59e-b2f7bae969c6",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Marie Skłodowska Curie",
    about: "Físico y químicos",
  }),
});
