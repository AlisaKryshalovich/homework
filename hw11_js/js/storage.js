// Передаем данные на LocalStorage локальное хранилище
export const getTodosFromLocalStorage = () => {
	return JSON.parse(localStorage.getItem("todos"));
};

// Извлекаем данные из LocalStorage локального хранилища
export const setTodosToLocalStorage = (todos) => {
	localStorage.setItem("todos", JSON.stringify(todos));
};
