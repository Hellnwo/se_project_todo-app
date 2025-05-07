import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

import Section from "../components/Section.js";
import {initialTodos, validationConfig} from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import TodoCounter from "../components/TodoCounter.js";
import PopupWithForm from '../components/PopupWithForm.js';

const addTodoButton = document.querySelector(".button_action_add");
// const addTodoPopupEl = document.querySelector("#add-todo-popup");
const addTodoForm = document.forms["add-todo-form"];
// const addTodoCloseBtn = addTodoPopupEl.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");

function handleCheck(completed) {
  todoCounter.updateCompleted(completed);
}

function handleDelete(completed) {
  if (completed) {
    todoCounter.updateCompleted(false);
  }
}

const todoCounter = new TodoCounter(initialTodos, ".counter__text");

const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (inputValues) => {
    const values = { name: inputValues.name, date: inputValues.date, id: uuidv4()};
    
    section.addItem(values);

  newTodoValidator.resetValidation();

  addTodoPopup.close();
},
});

addTodoPopup.setEventListeners();

 const generateTodo = (data) => {
  const todo = new Todo (data, "#todo-template", handleCheck, handleDelete);
  const todoElement = todo.getView();
  return todoElement;

 };

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});

const section = new Section ({
  items: initialTodos,
  renderer: (item) => {
  return generateTodo(item);
    }
  },
  ".todos__list"
);

section.renderItems();

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();