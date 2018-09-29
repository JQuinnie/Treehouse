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
