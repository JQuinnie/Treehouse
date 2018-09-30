// filter
// callback returns true or false
// filter creates new array so you do not need to declare empty array to push into first
const names = ["Selma", "Ted", "Mike", "Sam", "Sharon", "Marvin"];

const startsWithS = name => name.charAt(0) === "S";
const sNames = names.filter(startsWithS);

console.log(sNames);

// filter even numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNums = numbers.filter(num => num % 2 === 0);

console.log(evenNums);

// map to change strings to number
const strings = ["1", "2", "3", "4", "5"];
const nums = strings.map(string => parseInt(string, 10));

console.log(nums);

// refactor code below
// const fruits = ['apple', 'pear', 'cherry'];

// let capitalizedFruits = [];

// fruits.forEach(fruit => {
//   let capitalizedFruit = fruit.toUpperCase();
//   capitalizedFruits.push(capitalizedFruit);
// });

// console.log(capitalizedFruits);

const fruits = ["apple", "pear", "cherry"];
const capFruits = fruits.map(fruit => fruit.toUpperCase());

console.log(capFruits);

// Using .map for prices
const prices = [5, 4.23, 6.4, 8.09, 3.2];
const formatPrices = prices.map(price => `$${price.toFixed(2)}`);

console.log(formatPrices);
