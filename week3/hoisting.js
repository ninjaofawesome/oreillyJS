
var hello = 'hello';

function sayHello(){
	hello = 'hi there';
	console.log(hello);
}

console.log(sayHello());

var alertMe = 'I am a global variable!'

function hoistThis(){
	alertMe = 'Now I am the global variable!';
	return(alertMe);

}

console.log(hoistThis());

var tryThis = 'welcome!'

function hoistedFunction(){
	console.log(tryThis);  //returns undefined
	tryThis = 'howdy!';  //this is hoisted to the top of the function
	console.log(tryThis); //reassigns the value and logs it again

}

console.log(hoistedFunction());
