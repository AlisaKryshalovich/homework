import { getTodosFromLocalStorage } from "./storage.js";
import { renderTodos, initTodoHandlers } from "./dom.js";

// Получаем данные из локального хранилища и если он будет пустым, тогда вернет пустой массив
// const todos = [];
const todos = getTodosFromLocalStorage() || [];

// Функция для загрузки DOM
document.addEventListener("DOMContentLoaded", () => {
	renderTodos(todos);
	initTodoHandlers(todos);
});
