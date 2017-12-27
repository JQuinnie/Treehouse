
function palindrome(str) {
  var newStr = str.replace(/[\W_]/g, "").toLowerCase();
  return newStr === newStr.split('').reverse().join('');
}



console.log(palindrome("A man, a plan, a canal. Panama"));