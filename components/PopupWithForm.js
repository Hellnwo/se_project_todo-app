import Popup from "./Popup.js";

class PopupWithForm extends Popup{
    constructor ({popupSelector, handleFormSubmit}) {
        super({popupSelector});
        this._popupForm = this._popupElement.querySelector(".popup__form");
        this._handleFormSubmit = handleFormSubmit;
    }

    setEventListeners () {
        super.setEventListeners();

        this._popupForm.addEventListener("submit", (evt) => {
            evt.preventDefault();

            const inputValues = this._getInputValues();

            this._handleFormSubmit(inputValues);
          });
    }

    _getInputValues () {
  this._inputList = this._popupElement.querySelectorAll(".popup__input");

  const values = {};

  this._inputList.forEach((input) => {
   values[input.name] = input.value;
  });

  return values;
    }
}

export default PopupWithForm;