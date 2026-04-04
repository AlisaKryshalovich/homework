import { todoKeys, errTodoNotFound } from "./constants.js";

// Функция для получения id
const getNewTodoId = (todos) =>
	todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

// Функция для создания todo, которую передадим в массив
export const createTodo = (todos, text) => {
	const newTodo = {
		[todoKeys.id]: getNewTodoId(todos),
		[todoKeys.text]: text,
		[todoKeys.is_completed]: false,
	};
	todos.push(newTodo);
	return newTodo;
};

// Функция выполнения задачи и изменения ключа is_completed
export const completeTodoById = (todos, todoId) => {
	const todo = todos.find((todo) => todo[todoKeys.id] === todoId);

	if (!todo) {
		console.error(errTodoNotFound(todoId));
		return null;
	}
	todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
	return todo;
};

// Функция для удаления задачи
export const deleteTodoById = (todos, todoId) => {
	const todoIndex = todos.findIndex((todo) => todo[todoKeys.id] === todoId);
	if (todoIndex === -1) {
		console.error(errTodoNotFound(todoId));
		return todos;
	}
	todos.splice(todoIndex, 1);
	return todos;
};
