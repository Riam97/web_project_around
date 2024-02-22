const profileElement = document.querySelector(".profile");
const profileNameElement = profileElement.querySelector(".profile__name");
const profileOcupationElement = profileElement.querySelector(
  ".profile__ocupation"
);

const editProfileButton = document.querySelector(".profile__edit-button");
const editPopupElement = document.querySelector(".popup__profile");

const formElement = document.querySelector(".popup__form");

const buttonPopupForm = formElement.querySelector(".popup__button");
const popupName = formElement.querySelector(".popup__name");
const popupOcupation = formElement.querySelector(".popup__ocupation");

const addCardElement = document.querySelector(".cards");
const cardTitleElement = addCardElement.querySelector(".card__title");
const cardImageElement = addCardElement.querySelector(".card__image");

const addCardButton = document.querySelector(".profile__button-add-card");
const addCardPopupElement = document.querySelector(".popup__add-card");

const cardTitle = addCardPopupElement.querySelector(".popup__card-title");
const cardImage = addCardPopupElement.querySelector(".popup__card-image");

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileNameElement.textContent = popupName.value;
  profileOcupationElement.textContent = popupOcupation.value;
  closePopup();
}

function openProfilePopup() {
  editPopupElement.classList.add("popup__opened");
  popupName.value = profileNameElement.textContent;
  popupOcupation.value = profileOcupationElement.textContent;
}

function openAddCardPopup() {
  addCardPopupElement.classList.add("popup__opened");
  cardTitle.value = cardTitleElement.textContent;
  cardImage.value = cardImageElement.textContent;
}

function closePopup() {
  if (editPopupElement.classList.contains("popup__opened")) {
    editPopupElement.classList.remove("popup__opened");
  }
  if (addCardPopupElement.classList.contains("popup__opened")) {
    addCardPopupElement.classList.remove("popup__opened");
  }
}

formElement.addEventListener("submit", handleFormSubmit);
editProfileButton.addEventListener("click", openProfilePopup);
addCardButton.addEventListener("click", openAddCardPopup);
