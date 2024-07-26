export default class UserInfo {
  constructor({ nameSelector, occupationSelector, userId }) {
    this._nameElement = document.querySelector(nameSelector);
    this._occupationElement = document.querySelector(occupationSelector);
    this._userId = userId;
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      occupation: this._occupationElement.textContent,
    };
  }

  setUserInfo({ name, about }) {
    this._nameElement.textContent = name;
    this._occupationElement.textContent = about;
  }

  getUserId() {
    return this._userId;
  }

  /* setEventListeners() {
    this.element
      .querySelector(".profile__avatar")
      .addEventListener("click", () => {
        this._newAvatar();
      });
  }

  _newAvatar() {} */
}
