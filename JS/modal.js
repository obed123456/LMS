function buttonSubmitClicked(event) {

    if (!document.getElementById("uploadBox").value) { //check if not file is selected
      event.preventDefault();
      document.getElementById("alert_message").innerHTML = "Välj en fil!";
    } else {          
    document.getElementById("success_message").innerHTML = "Filen är skickat!"; //varning this is not working
    }
  }


var upload = document.getElementById('id01');
var comment = document.getElementById('id02');
// Get the <span> element that closes the modal
var close = document.getElementsByClassName("close")[0];
//When the user clicks on <span> (x), close the modal
close.onclick = function() {
    upload.style.display = "none";
    comment.style.display = "none";
}

// //When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === upload || event.target === comment) {
        upload.style.display = "none";
        comment.style.display = "none";
    }
}

// This will open same modal for same class
var btn = document.querySelectorAll('.upload');
var comments = document.querySelectorAll('.comment');

for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function() {
        upload.style.display ="block";//upload is modal nr: 1        
    });
}

for (var i = 0; i < comments.length; i++) {
    comments[i].addEventListener('click', function() {
        comment.style.display ="block";        
    });
}
