var mod_com_input = document.getElementById('myModal');
// This will open same modal for same class
var comment_input = document.querySelectorAll('.comments');

// This will open same modal for same class
 
var close = document.getElementsByClassName("close")[0];
//When the user clicks on <span> (x), close the modal
close.onclick = function() {
    mod_com_input.style.display = "none";
    // comment.style.display = "none";
}

// //When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === mod_com_input) {
        mod_com_input.style.display = "none";
    }
}

//If comment box is empty or filled
function buttonSubmitClicked() {

    if (document.getElementById("comment").value === "") { //If filled is empty
      document.getElementById("alert_message").innerHTML = "Skriv kommentar";
    } else {          
    document.getElementById("sucess_message").innerHTML = "Skickat!"; //varning this is not working
    document.getElementById("alert_message").style.display = "none";

    }
  }

//
for (var i = 0; i < comment_input.length; i++) {
    comment_input[i].addEventListener('click', function() {
        mod_com_input.style.display ="block";//show modal         
    });
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    mod_com_input.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
       mod_com_input.style.display = "none";
    }
}

