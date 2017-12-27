
function titleCase(str) {
  var lower = str.toLowerCase();
  var split = lower.split(" ");
  var newArr = [];
  
  for (var i=0; i<split.length; i++) {
    var newWord = split[i].charAt(0).toUpperCase() + split[i].slice(1);
    //console.log(newWord);
    newArr.push(newWord);
  }
  return newArr.join(' ');
}

console.log(titleCase("I'm a little tea pot"));