//define variables

/*var NYC = city("New York", "New York City", "NYC");
var SF = city("San Francisco", "SF", "Bay Area");
var LA = city("Los Angeles", "LA", "LAX");
var ATX = city("Austin", "ATX");
var SYD = city("Sydney", "SYD");
*/

/*function changeBackground(one, two, three){
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

}*/


//if user inputs a name of city

//when user submits form retrieve value of input
$(document).ready(function(){

$("#submit-btn").click(showPhoto);

function showPhoto(){
	event.preventDefault();
	var city = $("#city-type").val();

	changeBackground(city); 

} 

//change background by using a function

function changeBackground(city){
	if(city == "New York" || city == "New York City" || city == "NYC"){
		console.log("change bkgd img to NYC");
		$("body").attr("class" , "nyc");
	}

	else if (city == "San Francisco" || city == "SF" || city == "Bay Area"){
		console.log("change bkgd img to SF");
		$("body").attr( "class" , "sf");
		/*$("body").removeClass("nyc");
		$("body").removeClass("la");
		$("body").removeClass("austin");
		$("body").removeClass("sydney");*/
	}

	else if (city == "Los Angeles" || city == "LA" || city == "LAX"){
		console.log("change bkgd img to LA")
		$("body").attr("class" , "la");
		/*$("body").removeClass("nyc");
		$("body").removeClass("sf");
		$("body").removeClass("austin");
		$("body").removeClass("sydney");*/
	}

	else if (city == "Austin" || city == "ATX"){
		console.log("change bkgd img to ATX")
		$("body").attr("class" , "austin");
		/*$("body").removeClass("nyc");
		$("body").removeClass("sf");
		$("body").removeClass("la");
		$("body").removeClass("sydney");*/
	}

	else if (city == "Sydney" || city == "SYD"){
		console.log("change bkgd img to SYD")
		$("body").attr("class" , "sydney");
		/*$("body").removeClass("nyc");
		$("body").removeClass("sf");
		$("body").removeClass("austin");
		$("body").removeClass("la");*/
	}

}

});


