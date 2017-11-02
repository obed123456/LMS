    function addExcercise() {
      var date = document.getElementById("date-input").value;
      var excercise = document.getElementById("excercise-input").value;
      var description = document.getElementById("description-input").value;

      if(description === "" || excercise === null || date === null) {
         document.getElementById("invalid-message").innerHTML = "Ange datum och rubrik";
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
