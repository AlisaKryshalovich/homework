// Объект для получения значения по ключу, такой формат хранения повышает безопасность данных
export const todoKeys = {
	id: "id",
	text: "text",
	is_completed: "is_completed",
};

// Функция для выведения что такого id нет
export const errTodoNotFound = (todoId) => `Todo with id ${todoId} not found`;
