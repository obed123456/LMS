    function addExcercise() {
      var date = document.getElementById("date-input").value;
      var excercise = document.getElementById("excercise-input").value;
      var description = document.getElementById("description-input").value;
      var course = document.getElementById("course-select").value;

      if(description === "" || excercise === "" || date === null || course === "" ) {
         document.getElementById("invalid-message").innerHTML = "Vänligen fyll i alla fält";
         document.getElementById("invalid-message").style.color  ="red";

      } else {
        document.getElementById("submit-message").innerHTML = "Sparat";
        document.getElementById("invalid-message").style.display  ="none";
        document.getElementById("description-input").value ="";
        document.getElementById("date-input").value = "";

  }
}

  function exersiceExpand () {
    var x = document.getElementById("expand");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
  }
