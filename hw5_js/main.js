// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

// const person = {
//   name: "Алиса",
//   age: 35,
//   isStudent: true,
// };
// console.log(person);

// ===================================

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

// const isEmpty = object => {
//   for (const key in object) {
//     return false;
//   }
//   return true;
// };

// console.log(isEmpty(person));

// ===================================

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

// const task = {
//   title: "Заголовок",
//   description: "Заголовок позволяет обозначить и выделить часть текса",
//   isCompleted: true,
// };

// const task2 = {
//   title: "Заголовок",
//   description: "Заголовок помещается в тег, от h1 до h6",
// }

// function cloneAndModify (object, modifications) {
//   return { ...object, ...modifications };
// }

// const object = cloneAndModify(task, task2);
// for (const key in object) {
//   console.log(`${key}:`, object[key]);
// }

// ===================================

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };

// function callAllMethods (obj) {
//   for (const key in obj) {
//     if (typeof obj[key] !== "function") {
//       console.log("Имеется не метод");
//     } else {
//       obj[key]();
//     }
//   }
// }

// callAllMethods(myObject);