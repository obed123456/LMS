function addUsers() {
  var firstName = document.getElementById("firstname-input").value;
  var lastName = document.getElementById("lastname-input").value;
  var email = document.getElementById("email-input").value;
  var competence = document.getElementById("competence-input").value;

  if(firstName === "" || lastName === "" || email === "" || competence === "Välj Behörighet" ) {
     document.getElementById("invalid-message").innerHTML = "Vänligen fyll i alla fält";
     document.getElementById("invalid-message").style.color  ="red";

  } else {
    document.getElementById("submit-message").innerHTML = "Sparat";
    document.getElementById("invalid-message").style.display  ="none";
    document.getElementById("firstname-input").value = "";
    document.getElementById("lastname-input").value = "";
    document.getElementById("email-input").value ="";
    document.getElementById("competence-input").value = "";
  }
}
// save button for 'elever'
function addClass() {
  var assignClass = document.getElementsByClassName("assign-class").value;

  if(assignClass === "Tilldela Klass") {
     document.getElementById("invalid-message2").innerHTML = "Vänligen tilldela en klass innan du sparar";
     document.getElementById("invalid-message2").style.color  ="red";

  }
  else {
    document.getElementById("submit-message2").innerHTML = "Sparat";
    document.getElementById("invalid-message2").style.display  ="none";
  }
}

function exersiceExpand () {
var x = document.getElementById("expand");
if (x.style.display === "none") {
  x.style.display = "block";
} else {
    x.style.display = "none";
}
}

function exersiceExpand2 () {
var y = document.getElementById("expand2");
if (y.style.display === "none") {
  y.style.display = "block";
} else {
    y.style.display = "none";
}
}
function exersiceExpand3 () {
var z = document.getElementById("expand3");
if (z.style.display === "none") {
  z.style.display = "block";
} else {
    z.style.display = "none";
}

}

function addCourseNews() {
// var date = document.getElementById("date-input").value;
var rubrik = document.getElementById("rubrik-input").value;
var text = document.getElementById("text-input").value;
var kurs = document.getElementById("kurs-select").value;

if(text === "" || rubrik === "" || kurs === "" ) {
   document.getElementById("invalid-news-message").innerHTML = "Vänligen fyll i alla fält";
   document.getElementById("invalid-news-message").style.color  ="red";

} else {
  document.getElementById("submit-news-message").innerHTML = "Sparat";
  document.getElementById("invalid-news-message").style.display  ="none";
  document.getElementById("text-input").value ="";
  // document.getElementById("date-input").value = "";


}
}
