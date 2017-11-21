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
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");
var btn5 = document.getElementById("myBtn5");
var btn6 = document.getElementById("myBtn6");
var btn7 = document.getElementById("myBtn7");
var btn8 = document.getElementById("myBtn8");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}
btn2.onclick = function() {
    modal.style.display = "block";
}
btn3.onclick = function() {
    modal.style.display = "block";
}
btn4.onclick = function() {
    modal.style.display = "block";
}
btn5.onclick = function() {
    modal.style.display = "block";
}
btn6.onclick = function() {
    modal.style.display = "block";
}
btn7.onclick = function() {
    modal.style.display = "block";
}
btn8.onclick = function() {
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
