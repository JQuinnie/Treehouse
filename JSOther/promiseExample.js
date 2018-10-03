const calcPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1 + 1);
  }, 1000);
});

calcPromise.then((value) => {
  console.log(`The answer is ${value}`);
});
