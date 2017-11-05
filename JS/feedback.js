function allFeedback() {
	if (document.getElementById('name_required').value === "") {
		document.getElementById("fill_your_name").innerHTML ="Ange ditt namn.";
	} else {
    document.getElementById("submit_message").innerHTML = "Tack för din feedback!";
    x = document.getElementsByClassName("main-content-column-left");
    x[0].style.display ="none";
  }
}
// ----------------feedback for courses ----------------------------------
function feedbackCourses() {
	document.getElementById("submit_message_courses").innerHTML = "Tack för din feedback!";
	document.getElementById("course-evaluation").style.display = "none";
	startTimer();
}
function startTimer() {
    var tim = window.setTimeout("document.getElementById('submit_message_courses').style.display = 'none';", 2500);
}
// -----------------------------test----------------------------------
