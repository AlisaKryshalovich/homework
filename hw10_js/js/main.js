"use strict";

const todoKeys = {
	id: "id",
	text: "text",
	is_completed: "is_completed",
};

let todos = [];

const errTodoNotFound = (todoId) => `Todo with id ${todoId} not found`;

const getNewTodoId = (todos) =>
	todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text) => {
	const newTodo = {
		[todoKeys.id]: getNewTodoId(todos),
		[todoKeys.text]: text,
		// [todoKeys.text]: text.trim(),  // чтобы удалять пробелы вначале и в конце
		[todoKeys.is_completed]: false,
	};
	todos.push(newTodo);
	return newTodo;
};

const completeTodoById = (todos, todoId) => {
	const todo = todos.find((todo) => todo[todoKeys.id] === todoId);

	if (!todo) {
		console.error(errTodoNotFound(todoId));
		return null;
	}
	todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
	return todo;
};

const deleteTodoById = (todos, todoId) => {
	const todoIndex = todos.findIndex((todo) => todo[todoKeys.id] === todoId);
	if (todoIndex === -1) {
		console.error(errTodoNotFound(todoId));
		return todos;
	}
	todos.splice(todoIndex, 1);
	return todos;
};

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

// Создаем функцию handleCreateTodo(todos, text), которая будет вызывать createTodo и createTodoElement

function handleCreateTodo(todos, text) {
	// createTodo(todos, text);
	// createTodoElement(text);

	const todo = createTodo(todos, text);
	const todoElement = createTodoElement(todo);
	todosList.prepend(todoElement);
}

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
		todo.classList.toggle("completed");
	}

	if (event.target.matches(".button-delete")) {
		deleteTodoById(todos, todoId);
		todo.remove();
	}
});
