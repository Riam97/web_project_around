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

const addCardElement = document.querySelector(".cards");
//const cardElement = addCardElement.querySelector(".card");
const cardTitleElement = addCardElement.querySelector(".card__title");
const cardImageElement = addCardElement.querySelector(".card__image");
const addCardButton = document.querySelector(".profile__button-add-card");
const addCardPopupElement = document.querySelector(".popup__add-card");
const cardTitle = addCardPopupElement.querySelector(".popup__card-title");
const cardImage = addCardPopupElement.querySelector(".popup__card-image");

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
  cardTitle.value = cardImage.value;
  cardImage.value = cardImageElement.textContent;
}

function closePopup() {
  if (editPopupElement.classList.contains("popup__opened")) {
    editPopupElement.classList.remove("popup__opened");
  }
  if (addCardPopupElement.classList.contains("popup__opened")) {
    addCardPopupElement.classList.remove("popup__opened");
  }
  //funcion cerrar popup de la imagen NO FUNCIONA
  if (cardImagePopupElement.classList.contains("popup__opened")) {
    cardImagePopupElement.classList.remove("popup__opened");
  }
}

formElement.addEventListener("submit", handleFormSubmit);
editProfileButton.addEventListener("click", openProfilePopup);
addCardButton.addEventListener("click", openAddCardPopup);

//buscar info en el sprint de como es mejor escribirlo para que se entienda
const cardLikeButtons = document.querySelectorAll(".card__like-button");
cardLikeButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});

function card(cardData) {
  const cardTemplate = document.querySelector(".cards__template");
  const cardElement = cardTemplate.content.cloneNode(true);

  const cardImageElement = cardElement.querySelector(".card__image");
  const cardTitleElement = cardElement.querySelector(".card__title");
  const cardLikeButton = cardElement.querySelector(".card__like-button");

  cardImageElement.src = cardData.link;
  cardImageElement.alt = cardData.name;
  cardTitleElement.textContent = cardData.name;

  cardLikeButton.addEventListener("click", function () {
    this.classList.toggle("active");
  });

  // cardImageElement.addEventListener("click", function () {
  //  cardImagePopup.src = cardData.link;
  //  cardImagePopup.alt = cardData.name;
  //  cardImagePopupElement.classList.add("popup__opened");
  // });

  document.querySelector(".card__container").appendChild(cardElement);

  return cardElement;
}

initialCards.forEach((cardData) => {
  card(cardData);
});

//el boton de eliminar tarjeta FUNCIONA NO TOCAR no mover
const deleteButtons = document.querySelectorAll(".card__delete-button");
deleteButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    this.parentElement.remove();
  });
});

//funcion para guardar datos y crear la tarjeta NO FUNCIONA
function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const newCardData = {
    name: cardTitle.value,
    link: cardImage.value,
  };

  card(newCardData);
  cardTitle.value = "";
  cardImage.value = "";
  closePopup();
}
