	function save(){
        var x = document.getElementsByClassName('save')[0];

               x.innerHTML = "Sparat";
               x.style.display = "block";
}
    function save2(){
        var y = document.getElementsByClassName('save')[1];
            y.innerHTML = "Sparat";
            y.style.display = "block";

    }
    function save3(){
        var z = document.getElementsByClassName('save')[2];
          z.innerHTML = "Sparat";
          z.style.display = "block";
    }


function newFunc2() {
    document.getElementById("message").innerHTML = "Sparat!";
    document.getElementById("comment").value = "";


}
//---------------- comment button -------------------

// Get the modal
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName('close')[0];
// Get the button that opens the modal

	function comments(data) {
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
