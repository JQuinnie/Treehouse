// method chaining - as long as a method returns an array, you can chain another method

// removing duplicates from an array
const numbers = [1, 1, 2, 3, 4, 3, 5, 5, 6, 7, 3, 8, 9, 10];
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13
//the indexOf method will return the index of the first occurrence that is found in the array
const unique = numbers.filter((number, index, array) => {
  return index === array.indexOf(number);
});

console.log(unique);

// working with objects in array
const users = [
  { name: "Samir", age: 27 },
  { name: "Angela", age: 33 },
  { name: "Beatrice", age: 42 }
];

const newUsers = users.filter(user => user.name !== "Samir");
const userAge = users.map(user => `${user.name} is ${user.age} years old`);

console.log(newUsers);
console.log(userAge);

// working with reduce on objects
const userObject = users.reduce((userObject, user) => {
  userObject[user.name] = user.age;
  return userObject;
}, {});

console.log(userObject);

// combining two methods using .filter and .map
const userNames = ["Samir", "Angela", "Beatrice", "Shaniqua", "Marvin", "Sean"];

const userObjects = userNames
  .filter(name => name.charAt(0) === "S")
  .map(name => ({ name })); // same as {name: name}

console.log(userObjects);

// combining two methods using .filter and .map on array of objects
const users2 = [
  { name: "Samir", age: 27 },
  { name: "Angela", age: 33 },
  { name: "Beatrice", age: 42 },
  { name: "Shaniqua", age: 30 },
  { name: "Marvin", age: 23 },
  { name: "Sean", age: 47 }
];

const nameAges = users2.filter(user => user.age >= 30).map(user => user.name);

console.log(nameAges);

// combining two methods using .filter and .reduce
const products = [
  { name: "hard drive", price: 59.99 },
  { name: "lighbulbs", price: 2.59 },
  { name: "paper towels", price: 6.99 },
  { name: "flatscreen monitor", price: 159.99 },
  { name: "cable ties", price: 19.99 },
  { name: "ballpoint pens", price: 4.49 }
];

const newProd = products
  .filter(product => product.price < 10)
  .reduce((high, cur) => {
    if (high.price > cur.price) {
      return high;
    }
    return cur;
  });

console.log(newProd);

// another example of combo methods to return total price over $10
const totalCost = products
  .filter(prod => prod.price > 10)
  .reduce((sum, prod) => sum + prod.price, 0)
  .toFixed(2);

console.log(totalCost);

// using the reduce method to flatten array
const movies = [
  ["The Day the Earth Stood Still", "Superman", "Ghostbusters"],
  ["Finding Dory"],
  ["Jaws", "On the Waterfront"]
];

const flatMovies = movies.reduce(
  (arr, innerMovies) => [...arr, ...innerMovies],
  []
);
console.log(flatMovies);

// using the reduce method to flatten an array of objects
const users3 = [
  {
    name: "Samir",
    age: 27,
    favoriteBooks: [{ title: "The Iliad" }, { title: "The Brothers Karamazov" }]
  },
  {
    name: "Angela",
    age: 33,
    favoriteBooks: [
      { title: "Tenth of December" },
      { title: "Cloud Atlas" },
      { title: "One Hundred Years of Solitude" }
    ]
  },
  {
    name: "Beatrice",
    age: 42,
    favoriteBooks: [{ title: "Candide" }]
  }
];

const books = users3
  .map(user => user.favoriteBooks.map(book => book.title))
  .reduce((arr, title) => [...arr, ...title], []);

console.log(books);
