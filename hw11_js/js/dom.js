import { todoKeys } from "./constants.js";
import { createTodo, completeTodoById, deleteTodoById } from "./service.js";
import { setTodosToLocalStorage } from "./storage.js";

// При помощи метода querySelector получаем элементы .form, .input и .todos
const formElement = document.querySelector(".form");
const inputElement = document.querySelector(".input");
const todosList = document.querySelector(".todos");

// Создаем функцию createTodoElement(text), которая будет создавать todo в виде разметки
function createTodoElement(todo) {
	const todoElement = document.createElement("li");
	todoElement.classList.add("todo");
	todoElement.dataset.id = todo[todoKeys.id];
	todoElement.innerHTML = `
      <div class="todo-text">${todo[todoKeys.text]}</div>
      <div class="todo-actions">
        <button class="button-complete button">&#10004;</button>
        <button class="button-delete button">&#10006;</button>
      </div>
    `;
	// todosList.append(todo);
	return todoElement;
}

// Функция перезаписывания html
export const renderTodos = (todos) => {
	todosList.innerHTML = "";
	todos.forEach((todo) => {
		const todoElement = createTodoElement(todo);
		if (todo[todoKeys.is_completed]) {
			todoElement.classList.add("completed");
		}
		todosList.prepend(todoElement);
	});
};

// Создаем функцию handleCreateTodo(todos, text), которая будет вызывать createTodo и createTodoElement
function handleCreateTodo(todos, text) {
	// createTodo(todos, text);
	// createTodoElement(text);

	const todo = createTodo(todos, text);
	const todoElement = createTodoElement(todo);
	setTodosToLocalStorage(todos);
	todosList.prepend(todoElement);
}

export const initTodoHandlers = (todos) => {
	// Отменяем у формы свойство по умолчанию, извлекаем содержимое input с удалением пробелов, проверяем text что он что-то содержит, запускает функцию handleCreateTodo, освобождаем строчку input
	formElement.addEventListener("submit", (event) => {
		event.preventDefault();
		const text = inputElement.value.trim();
		if (text == "") return; // или if(!text) return;
		handleCreateTodo(todos, text);
		inputElement.value = "";
	});

	//  Навешиваем слушатель-событий на родителя задач ul.todoList, чтобы получить задачу и выполнить делегирование и в дальнейшем реализовать выполнение и удаление задачи
	todosList.addEventListener("click", (event) => {
		const todo = event.target.closest(".todo");
		if (!todo) return;

		const todoId = Number(todo.dataset.id);

		if (event.target.matches(".button-complete")) {
			completeTodoById(todos, todoId);
			setTodosToLocalStorage(todos);
			todo.classList.toggle("completed");
		}

		if (event.target.matches(".button-delete")) {
			deleteTodoById(todos, todoId);
			setTodosToLocalStorage(todos);
			todo.remove();
		}
	});
};
