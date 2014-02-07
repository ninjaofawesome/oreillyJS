//EXAMPLE OF LEXICAL STRUCTURE

//Ruby Method
def my_method
	print "this is a method"
end

//Javascript function
var = myFunction(awesome){
	return("javascript is " + awesome)
}

//best practice naming
//variables: good ones

var myVariable = x;

//variables: you look like a Rubyist

var my_variable = x;

//variables: not so good

var MyVariable = x;

//This is a one line comment.

/* This is a multiline comment!
Look at how much genius I have 
to share within this tome.  It
is greatness in its purest form. */

//Needs a semicolon:

/* This obviously needs a semicolon at
the end of x and the end of y for two
reasons: 
1. They only have one value
2. I put them both on the same line.
   (This isn't necessary or recommended.)*/

var tooMuchStuff= x var evenMoreStuff = y

//Will work without semicolon:

/*this works because each variable is
on separate lines.  evenMoreStuff,
however, DOES need a semicolon as it is
the last variable */
var tooMuchStuff= x 
var evenMoreStuff = y;

/* If a statement ends in a curly brace,
the semicolon can be removed as well. */
var myObject = {
	name: "hello";
}

//JavaScript Semicolon Weirdness:
/*again, doesn't need semicolon as
JS assumes you meant to put one
there to express the end of a value */
var tooMuchStuff= x 
var evenMoreStuff = y;

//Also doesn't need them here, strangely. 


var weirdness 
	weirdness 
	=
	"yes"

console.log(weirdness)

//equals....
 
var weirdness; weirdness = "yes"; console.log(weirdness);

//Don't do this because..

return
true;
//equals...
return; true;

//or....
x
++
y;
//because it evaluates to
x; ++y;







