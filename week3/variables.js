global = 'this is a global variable';

function declareVariables(){
	global = 'this is the variable in the function';
	local = 'fuzzy bunnies';
	return [global, local];
}

console.log(declareVariables());
//['this is the variable in the function', 'fuzzy bunnies']
console.log(global);
//'this is the variable in the function'

