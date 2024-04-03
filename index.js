const profileElement = document.querySelector(".profile");
const profileNameElement = profileElement.querySelector(".profile__name");
const profileOcupationElement = profileElement.querySelector(
  ".profile__ocupation"
);
const editProfileButton = document.querySelector(".profile__edit-button");
const editPopupElement = document.querySelector("#popup__profile");
const formElement = document.querySelector(".popup__form");
const popupName = formElement.querySelector(".popup__name");
const popupOcupation = formElement.querySelector(".popup__ocupation");

const addCardButton = document.querySelector(".profile__button-add-card");
const addCardPopupElement = document.querySelector("#popup__add-card");
const inputTitle = formElement.querySelector(".popup__input-title");
const inputImage = formElement.querySelector(".popup__input-image");
const imagePopupElement = document.querySelector("#popup__images");
const closeButton = document.querySelectorAll(".popup__close-button");
const cardTitlePopup = document.querySelector(".popup__card-title");
const cardImagePopup = document.querySelector(".popup__card-image");

const buttonElement = document.querySelector(".popup__button");
const initialCards = [
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
  // setTimeout(() => popupName.focus(), 0);
}

function openAddCardPopup() {
  addCardPopupElement.classList.add("popup__opened");
}

console.log(inputTitle);

function closePopup() {
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

formElement.addEventListener("submit", handleFormSubmit);

editProfileButton.addEventListener("click", function (event) {
  event.stopPropagation();
  openProfilePopup();
});

addCardButton.addEventListener("click", function (event) {
  event.stopPropagation();
  openAddCardPopup();
});

function card(cardData) {
  const cardTemplate = document.querySelector(".cards__template");
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardImageElement = cardElement.querySelector(".card__image");
  const cardTitleElement = cardElement.querySelector(".card__title");
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  const deleteButtons = cardElement.querySelector(".card__delete-button");

  cardImageElement.src = cardData.link;
  cardImageElement.alt = cardData.name;
  cardTitleElement.textContent = cardData.name;

  cardLikeButton.addEventListener("click", function () {
    this.classList.toggle("active");
  });

  deleteButtons.addEventListener("click", function () {
    cardElement.remove();
  });

  cardImageElement.addEventListener("click", function () {
    openImagePopup(cardData.link, cardData.name);
  });

  return cardElement;
}

initialCards.forEach((cardData) => {
  const initialCard = card(cardData);
  document.querySelector(".cards").appendChild(initialCard);
});

closeButton.forEach((button) => {
  button.addEventListener("click", closePopup);
});

document.addEventListener("DOMContentLoaded", function () {
  addCardPopupElement.addEventListener("submit", function (event) {
    event.preventDefault();

    const currentForm = event.target.closest(".popup__form");

    const inputTitle = currentForm.querySelector(".popup__input-title");
    const inputImage = currentForm.querySelector(".popup__input-image");

    let cardValues = {
      link: inputImage.value,
      name: inputTitle.value,
    };

    const newCard = card(cardValues);
    document.querySelector(".cards").prepend(newCard);

    inputTitle.value = "";
    inputImage.value = "";

    closePopup();
  });
});

function openImagePopup(src, title) {
  imagePopupElement.classList.add("popup__opened");
  cardImagePopup.src = src;
  cardTitlePopup.alt = title;
  cardTitlePopup.textContent = title;
}
