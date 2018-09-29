// filter
// callback returns true or false
const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];

const sNames = names.filter(name => name.charAt(0) === 'S');

console.log(sNames);
