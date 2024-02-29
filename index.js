const profileElement = document.querySelector(".profile");
const profileNameElement = profileElement.querySelector(".profile__name");
const profileOcupationElement = profileElement.querySelector(
  ".profile__ocupation"
);
const editProfileButton = document.querySelector(".profile__edit-button");
const editPopupElement = document.querySelector(".popup__profile");
const formElement = document.querySelector(".popup__form");
const popupName = formElement.querySelector(".popup__name");
const popupOcupation = formElement.querySelector(".popup__ocupation");

const addCardButton = document.querySelector(".profile__button-add-card");
const addCardPopupElement = document.querySelector(".popup__add-card");
const inputTitle = addCardPopupElement.querySelector(".popup__input-title");
const inputImage = addCardPopupElement.querySelector(".popup__input-image");
const imagePopupElement = document.querySelector(".popup__images");
const closeButton = document.querySelectorAll(".popup__close-button");
const cardTitlePopup = document.querySelector(".popup__card-title");
const cardImagePopup = document.querySelector(".popup__card-image");
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

//funcion para cambiar el nombre y la ocupacion del usuario, FUNCIONA NO TOCAR
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

//funcion QUE mantiene las tarjetas FUNCIONA
function openAddCardPopup() {
  addCardPopupElement.classList.add("popup__opened");
  inputTitle.value = inputImage.value;
  inputImage.value = cardImageElement.textContent;
}

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
editProfileButton.addEventListener("click", openProfilePopup);
addCardButton.addEventListener("click", openAddCardPopup);

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
  document.querySelector(".card__container").appendChild(initialCard);
});

closeButton.forEach((button) => {
  button.addEventListener("click", closePopup);
});

addCardPopupElement.addEventListener("submit", function (event) {
  event.preventDefault();

  let cardValues = {
    link: inputImage.value,
    name: inputTitle.value,
  };

  const newCard = card(cardValues);
  document.querySelector(".card__container").prepend(newCard);

  inputTitle.value = "";
  inputImage.value = "";

  closePopup();
});
//document.querySelector(".card__container").prepend(newCard);

function openImagePopup(src, title) {
  imagePopupElement.classList.add("popup__opened");
  cardImagePopup.src = src;
  cardTitlePopup.alt = title;
  cardTitlePopup.textContent = title;
}
