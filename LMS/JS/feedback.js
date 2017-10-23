function allFeedback() {
	if (document.getElementById('name_required').value === "") {
		document.getElementById("fill_your_name").innerHTML ="Ange ditt namn.";
	} else {
    document.getElementById("submit_message").innerHTML = "Tack för din feedback!";
    x = document.getElementsByClassName("main-content-column-left");
    x[0].style.display ="none";
  }
}