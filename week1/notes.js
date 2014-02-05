// VARIABLES
// ex:
 var x;  //undefined, just establishes variable
 var x = 0; //assigned value to var x
 x          // how to use var x.  It will evaluate its value given previously.

//TYPES OF VALUES SUPPORTED BY JS:
x = 1; //number
x = 0.01//one number type of integers and real numbers. 
x = "hello!", x = 'JavaScript'//strings, double or single quotes
x = true, x = false; //booleans
x = null; //this means "no value"
x = undefined; //similar to null.

//OTHER THINGS THAT CAN BE MANIPULATED BY JS:
//objects
var myObject = {
	name: "Hannah";
	quality: "Stupendous";
	eye_color: "brown";
}

//what is the name in my object?
myObject.name //=>"Hannah"

//how can we assign shoe size to 
//my object?
myObject.shoe_size: 10;

//arrays

var myArray = ["cat", "dog", "fish"]

//how many things in the list?
myArray.length //=> 3

//get the fish
myArray[2];

//add a new pet to the array
myArray[3] = "snake";

//get rid of the cat, make it a lizard.
myArray[0] = "lizard";

//functions
function addUp(x, y){
	return x + y;
	console.log ("hello!");
}

addUp(2,3);

//the above example returns a side effect with console.log,
//meaning it isn't a "pure" function

//methods

var myArray = ["cat", "dog", "fish"]

//flip the order
myArray.reverse();

//add new stuff
myArray.push("cow");

//access the object where the method is defined with "this".
//in function stuff, the "this" would be the object defined by 
//the base of JS.

function stuff() {
    return this;
}







