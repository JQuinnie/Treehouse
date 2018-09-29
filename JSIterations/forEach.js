const fruits = ['apples', 'bananas', 'cherries'];

// old school
for (let i = 0; i < fruits.length; i += 1) {
  console.log(fruits[i]);
}

// forEach
// easier to read and understand
// won't loop infinite times
// avoids increment mistakes and wrong conditions
// can't break out
fruits.forEach(fruit => console.log(fruit));

const capFruits = [];

fruits.forEach((fruit) => {
  const capFruit = fruit.toUpperCase();
  capFruits.push(capFruit);
});

console.log(capFruits);

// sum of prices
const prices = [6.75, 3.1, 4.0, 8.12];

let totalPrice = 0;

prices.forEach((price) => {
  totalPrice += price;
});

console.log(totalPrice);

// only names starting with 'S'
const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];

const sNames = [];

names.forEach((name) => {
  if (name.charAt(0).toLowerCase() === 's') {
    sNames.push(name);
  }
});

console.log(sNames);
