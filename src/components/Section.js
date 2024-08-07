export default class Section {
  constructor({ data, renderer }, containerSelector) {
    this._rendereditems = data;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  renderItems() {
    this._rendereditems.forEach((item) => this._renderer(item));
  }
  addItems(element) {
    this._container.append(element);
  }
  addCard(element) {
    this._container.prepend(element);
  }
}
