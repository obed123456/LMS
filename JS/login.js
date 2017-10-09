var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function validate() {
      var text1 = document.getElementById("userInput");
      var text2 = document.getElementById("userPass");
      if (text1.value == "student" && text2.value == "pass") {
        load("login.html");
      } else {
        load("index.html");
      }
    }

    function load(url) {
      location.href = url;
    }
