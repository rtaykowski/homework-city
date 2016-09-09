//set document to read js after the rest of site has loaded using document function
$(document).ready(function(){

//create a array and define it's variables
var cities = ["NYC", "LA", "SYD", "SF", "ATX", "SD"];

//add values to the select menu by using a forEach loop 
cities.forEach(function(element,index){
	$("select").append("<option value='"+element+"'>"+element+"</option>");
	});	

//create a listener to detect when the selection in the drop-down menu changes
$("select").change(grabSelection); 

//create function to translate the value it detects
function grabSelection(){
	event.preventDefault();
								// var city = $("select").val();
	var city = ($(this).val()); //get the value of the city

	//change the background according to the city
	changeBackground(city); 

} 

//use conditions to change the background depending on the value of the city
function changeBackground(city){
	if(city == "NYC"){
		console.log("change bkgd img to NYC");
		$("body").attr("class" , "nyc");
	}

	else if (city == "SF"){
		console.log("change bkgd img to SF");
		$("body").attr( "class" , "sf");
	}

	else if (city == "LA"){
		console.log("change bkgd img to LA")
		$("body").attr("class" , "la")
	}

	else if (city == "ATX"){
		console.log("change bkgd img to ATX")
		$("body").attr("class" , "austin");
	}

	else if (city == "SYD"){
		console.log("change bkgd img to SYD")
		$("body").attr("class" , "sydney");
	}

	else if (city == "SD"){
		console.log("change bkgd img to SD")
		$("body").attr("class" , "sandiego");
	}

}

});

