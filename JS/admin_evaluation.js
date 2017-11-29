var x = document.getElementsByClassName("_1");
var success = document.getElementsByClassName("success");
var error = document.getElementsByClassName("error");
function weekly_eva(){

	if(x[1].value === ""){
	error[0].innerHTML = "Vänligen skriv en fråga"; 
	error[0].style.color ="red";

} else {
    success[0].innerHTML = "Sparat";
    error[0].style.display ="none";
    x[1].value ="";
}
}

//course evalutation 
function course_eva(){

	if(x[3].value === ""){
	error[1].innerHTML = "Vänligen skriv en fråga"; 
	error[1].style.color ="red";

} else {
    success[1].innerHTML = "Sparat";
    error[1].style.display ="none";
    x[3].value ="";
}
}


