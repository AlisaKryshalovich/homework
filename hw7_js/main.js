// 1.
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// function boolToWord(bool) {
// 	return bool === true ? "Yes" : "No";
// }

// 2.
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// function evenOrOdd(number) {
// 	return number % 2 === 0 ? "Even" : "Odd";
// }

// 3.
// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:
// Example(Input --> Output)
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"

// const array = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];

// 1 вариант
// function findNeedle(haystack) {
// 	const strIndex = haystack.findIndex(str => str === "needle");
// 	if (strIndex >= 0) {
// 		return (`found the needle at position ${strIndex}`);
// 	} else {
// 		return "Your function didn't return anything";
// 	}
// }
// console.log(findNeedle(array));

// 2 вариант
// function findNeedle(haystack) {
// 	for (let i = 0; i < haystack.length; i++) {
// 		if(haystack[i] === "needle") {
// 			return (`found the needle at position ${i}`);
// 		}
// 	} return "Your function didn't return anything";
// }
// console.log(findNeedle(array));

// 4
// Write a function which converts the input string to uppercase.

// let str = "Can you find the needle in the haystack?";

// function makeUpperCase(str) {
//   return str.toUpperCase();
// }
// console.log(makeUpperCase(str));

// 5
// Необходимо цифру сделать строкой
// function numberToString(num) { return num.toString();}
// console.log(numberToString(9));

// 6
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

// function loveFunc(flower1, flower2){
//   return (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
// 	(flower1 % 2 !== 0 && flower2 % 2 === 0);
// }
// console.log(loveFunc(5, 6));

// 7
// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

// const numbers = [];
// const numbers = [1, 2, 3, null, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

// 1 вариант
// function countPositivesSumNegatives(input) {
// 	if (!input || input.includes(null) || input.length === 0) { return []; }
// 	let count = 0;
// 	let sum = 0;
// 	for (let i = 0; i < input.length; i++) {
// 		if (input[i] > 0) {
// 			count++;
// 		} else {
// 			sum += input[i];
// 		}
// 	}
// 	return [count, sum];
// }

// 2 вариант
// function countPositivesSumNegatives(input) {
// 	if (!input || input.includes(null) || input.length === 0) { return []; }
// 	const count = input.filter(number => number > 0).length;
// 	const sum = input.filter(number => number < 0).reduce((acc, number) => acc + number, 0);
// 	return [count, sum];
// }

// console.log(countPositivesSumNegatives(numbers));

// 8
// Write a function which calculates the average of the numbers in a given array.
// Note: Empty arrays should return 0.

// function findAverage(array) {
//   return array && array.length ? (array.reduce((acc, number) => acc + number, 0) / array.length) : 0;
// }

// 9
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// Note: input will never be an empty string

// const str = "Given8 a st3ring of di5gi2ts";

// function fakeBin(x){
// 	let result = "";
// 	for (let i = 0; i < x.length; i++) {
// 		const char = x[i];
// 		if (char >= '0' && char <= '9') {
// 			const number = +char;
// 			result += number < 5 ? '0' : '1';
// 		} else {
// 			result += char;
// 		}
// 	}
// 	return result;
// }

// console.log(fakeBin(str));


// 10
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// You can assume that all values are integers. Do not mutate the input array.
// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []

// const array = [1, 8, 3, -4, -15, 7];

// 1 вариант
// function invert(array) {
//   for (let i = 0; i < array.length; i++) {
// 		if (array[i] < 0) {
// 			array[i] = -(array[i]);
// 		} else {
// 			array[i] = -array[i];
// 		}
// 	}
// 	return array;
// }

// 2 вариант
// function invert(array) {
// 	return array.map( num => num < 0 ? -(num) : -num);
// }

// console.log(invert(array));
