// Задание 1.
// Дан массив пользователей:
const users = [
	{ name: "Alex", age: 24, isAdmin: false },
	{ name: "Bob", age: 13, isAdmin: false },
	{ name: "John", age: 31, isAdmin: true },
	{ name: "Jane", age: 20, isAdmin: false },
];
// Добавьте в конец массива двух пользователей:
// { name: 'Ann', age: 19, isAdmin: false },
// { name: 'Jack', age: 43, isAdmin: true }

users.push(
	{ name: "Ann", age: 19, isAdmin: false },
	{ name: "Jack", age: 43, isAdmin: true },
);
console.log(users);

// =========================================

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

// function getUserAverageAge (users) {
//   let sum = 0;
//   let count = 0;
//   for (let i = 0; i < users.length; i++) {
//     sum += users[i].age;
//     count++;
//   }
//   return sum / count;
// }
// console.log(`Средний возраст пользователей:`, getUserAverageAge(users));

// =========================================

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.

// function getAllAdmins (array) {
//   let admins = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].isAdmin === true) {
//       admins.push(array[i]);
//     }
//   }
//   return admins;
// }
// console.log(getAllAdmins(users));

// =========================================

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

// function first(arr, n) {
// 	let result = [];
// 	if (n > arr.length) {
// 		console.error("Число не может быть больше длины массива");
// 		return;
// 	} else if (n == 0) {
// 		return result;
// 	} else if (n == undefined) {
// 		result.push(arr[0]);
//     return result;
// 	} else {
// 		for (let i = 0; i < n; i++) {
// 			result.push(arr[i]);
// 		}
// 		return result;
// 	}
// }

// console.log(first(users, 2));
