// method chaining - as long as a method returns an array, you can chain another method

// removing duplicates from an array
const numbers = [1, 1, 2, 3, 4, 3, 5, 5, 6, 7, 3, 8, 9, 10];
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13
//the indexOf method will return the index of the first occurrence that is found in the array
const unique = numbers.filter(function(number, index, array) {
  return index === array.indexOf(number);
});

console.log(unique);
