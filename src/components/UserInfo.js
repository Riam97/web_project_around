export default class UserInfo {
  constructor({ nameSelector, occupationSelector, avatarSelector, userId }) {
    this._nameElement = document.querySelector(nameSelector);
    this._occupationElement = document.querySelector(occupationSelector);
    this._avatarElement = document.querySelector(avatarSelector);
    this._userId = userId;
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      occupation: this._occupationElement.textContent,
      avatar: this._avatarElement.src,
    };
  }

  setUserInfo({ name, about, avatar }) {
    this._nameElement.textContent = name;
    this._occupationElement.textContent = about;
    if (avatar) {
      this._avatarElement.src = avatar;
    }
  }

  getUserId() {
    return this._userId;
  }
}
