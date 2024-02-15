const profileElement = document.querySelector(".profile");
const profileNameElement = profileElement.querySelector(".profile__name");
const profileOcupationElement = profileElement.querySelector(
  ".profile__ocupation"
);

const profileName = profileNameElement.textContent;
const profileOcupation = profileOcupationElement.textContent;

const editProfileButton = document.querySelector(".profile__edit-button");
const editPopupElement = document.querySelector(".popup");

const formElement = document.querySelector(".popup__form");
const nameForm = formElement.querySelector(".popup__form-name");
const ocupationForm = formElement.querySelector("popup__form-ocupation");

function setPopupInputs() {
  nameForm.value = profileName;
  ocupationForm.value = profileOcupation;
}

function openPopup() {
  editPopupElement.classList.add("popup__opened");
}

editProfileButton.addEventListener("click", openPopup);
