export const profileElement = document.querySelector(".profile");
export const profileNameElement =
  profileElement.querySelector(".profile__name");
export const profileOccupationElement = profileElement.querySelector(
  ".profile__occupation"
);
export const editProfileButton = document.querySelector(
  ".profile__edit-button"
);
export const editPopupElement = document.querySelector("#popup__profile");
export const profileFormElement = document.querySelector(
  ".popup__form-edit-profile"
);
export const popupName = profileFormElement.querySelector(".popup__name");
export const popupOccupation =
  profileFormElement.querySelector(".popup__occupation");
export const addCardButton = document.querySelector(
  ".profile__button-add-card"
);
export const addCardPopupElement = document.querySelector("#popup__add-card");
export const addCardFormElement = document.querySelector(
  ".popup__form-add-card"
);
export const inputTitle = addCardFormElement.querySelector(
  ".popup__input-title"
);
export const inputImage = addCardFormElement.querySelector(
  ".popup__input-image"
);
export const imagePopupElement = document.querySelector("#popup__images");
export const closeButton = document.querySelectorAll(".popup__close-button");
export const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

export const popupSelector = document.querySelectorAll(".popup");
export const formElement = document.querySelectorAll(".popup__form");
