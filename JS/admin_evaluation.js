function weekly_eva(){
var x = document.getElementsByClassName("_4");

	if(x[0].value === ""){
	document.getElementById('message').innerHTML = "Vänligen skriv en fråga"; 
	document.getElementById('message').style.color ="red";

} else {
    document.getElementById('right_message').innerHTML = "Sparat";
    document.getElementById('message').style.display ="none";
}
}
