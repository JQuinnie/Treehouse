const calcPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1 + 1);
  }, 1000);
});

// one promise resolved
calcPromise.then((value) => {
  console.log(`The answer is ${value}`);
});

// two promise resolved
calcPromise.then(value => value + 2).then((nextValue) => {
  console.log(`The final value is ${nextValue}`);
});
