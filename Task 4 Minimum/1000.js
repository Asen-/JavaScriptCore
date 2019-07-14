//number frrom 1000
let result = '';
let i = 1000;
do { 
  result += i + ' ';
  i += 3;
} while (i.toString().length < 5);
console.log(result);