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
