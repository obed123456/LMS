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
