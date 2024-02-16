const profileElement = document.querySelector(".profile");
const profileNameElement = profileElement.querySelector(".profile__name");
const profileOcupationElement = profileElement.querySelector(
  ".profile__ocupation"
);

const editProfileButton = document.querySelector(".profile__edit-button");
const editPopupElement = document.querySelector(".popup");

const formElement = document.querySelector(".popup__form");
const nameForm = formElement.querySelector(".popup__form-name");
const ocupationForm = formElement.querySelector(".popup__form-ocupation");

const button = formElement.querySelector(".popup__button");
const popupName = formElement.querySelector(".popup__name");
const popupOcupation = formElement.querySelector(".popup__ocupation");

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileNameElement.textContent = popupName.value;
  profileOcupationElement.textContent = popupOcupation.value;
  /*editPopupElement.classList.remove("popup__opened");*/
  closePopup();
}

function openPopup() {
  editPopupElement.classList.add("popup__opened");
  popupName.value = profileNameElement.textContent;
  popupOcupation.value = profileOcupationElement.textContent;
}

function closePopup() {
  editPopupElement.classList.remove("popup__opened");
}

formElement.addEventListener("submit", handleFormSubmit);
editProfileButton.addEventListener("click", openPopup);
