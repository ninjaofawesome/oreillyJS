x = 2;
y = "2";
var hello = x == x;
console.log(hello);
//true
var hello = x === y;
console.log(hello);
//false
var hello = undefined == null;
console.log(hello);
//true
var hello = undefined === null;
console.log(hello);
//false


var operator = 'this is an operator';

console.log(operator);

var a = 1;
var b = 2;
var c = 3;

var leftToRight1 = a + b;
console.log(leftToRight1);

var leftToRight2 = a + b + c;
console.log(leftToRight2);

var leftToRight3 = a + b / c;
console.log(leftToRight3);

/* anticipated return of 1, got 1.6666.
as it turns out, this reads right to left 
as it was interpreted as (b/c) + a */

var test = a ? b : c;
console.log(test);