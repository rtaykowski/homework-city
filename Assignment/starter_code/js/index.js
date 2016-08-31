//define variables

var NYC = city("New York", "New York City", "NYC");
var SF = city("San Francisco", "SF", "Bay Area");
var LA = city("Los Angeles", "LA", "LAX");
var ATX = city("Austin", "ATX");
var SYD = city("Sydney", "SYD");

//define function

function city(one, two, three){
	if(one == "New York" || two == "New York City" || three == "NYC"){
		console.log("change bkgd img to NYC")
	}

	else if(one == "San Francisco" || two == "SF" || three == "Bay Area"){
		console.log("change bkgd img to SF")
	}

	else if(one == "Los Angeles" || two == "LA" || three == "LAX"){
		console.log("change bkgd img to LA")
	}

	else if(one == "Austin" || two == "ATX"){
		console.log("change bkgd img to ATX")
	}

	else if(one == "Sydney" || two == "SYD"){
		console.log("change bkgd img to SYD")
	}

	console.log(one, two, three);
	return one+", "+two+", "+three;

}

//if user inputs a name of city

$("#city-type").val("");


