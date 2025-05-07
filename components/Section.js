export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;

    this._container = document.querySelector(containerSelector);
  }

  addItem(data) {
    const element = this._renderer(data);
    this._container.append(element);
  }

  clear() {
    this._container.innerHTML = "";
  }

  renderItems() {
    this.clear();

    this._renderedItems.forEach((item) => {
      const itemEl = this._renderer(item);
      this._container.append(itemEl);
    });
  }
}
