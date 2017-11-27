  var modal = document.getElementById('id01');
  var modal2 = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
//modal 1******upload file
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}
// When the user clicks anywhere outside of the modal, close it
//modal 2******Message from teacher
window.onclick = function(event) {
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
}


function buttonSubmitClicked(event) {

    if (!document.getElementById("uploadBox").value) { //check if not file is selected
      event.preventDefault();
      alert("Please choose a file!");
    } else {
    console.log("Skickat!");
    document.getElementById("success-message").innerHTML = "Filen är skickat!"; //varning this is not working
    alert("Filen är skickat");
    }
  }


  //---------------- comment button -------------------

  // Get the modal
  var modal = document.getElementById('id01');
  var span = document.getElementsByClassName('close')[0];
  // Get the button that opens the modal

  	function submit(data) {
  		modal.style.display = "block";
  	}


  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
