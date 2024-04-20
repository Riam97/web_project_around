const profileElement = document.querySelector(".profile");
export const profileNameElement =
  profileElement.querySelector(".profile__name");
const profileOcupationElement = profileElement.querySelector(
  ".profile__ocupation"
);
export const editProfileButton = document.querySelector(
  ".profile__edit-button"
);
const editPopupElement = document.querySelector("#popup__profile");
export const profileFormElement = document.querySelector(
  ".popup__form-edit-profile"
);
const popupName = profileFormElement.querySelector(".popup__name");
const popupOcupation = profileFormElement.querySelector(".popup__ocupation");
export const addCardButton = document.querySelector(
  ".profile__button-add-card"
);
const addCardPopupElement = document.querySelector("#popup__add-card");
export const addCardFormElement = document.querySelector(
  ".popup__form-add-card"
);
export const inputTitle = addCardFormElement.querySelector(
  ".popup__input-title"
);
export const inputImage = addCardFormElement.querySelector(
  ".popup__input-image"
);
const imagePopupElement = document.querySelector("#popup__images");
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

export function openProfilePopup() {
  editPopupElement.classList.add("popup__opened");
  popupName.value = profileNameElement.textContent;
  popupOcupation.value = profileOcupationElement.textContent;
}

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
  profileOcupationElement.textContent = popupOcupation.value;
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
