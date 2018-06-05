fs = require('fs');

data = fs.readdirSync('/Users');
console.log('data:', data);
console.log("this comes after");