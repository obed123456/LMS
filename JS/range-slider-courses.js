// var slide1 = document.getElementById("myRange1");
// var output1 = document.getElementById("demo1");
// output1.innerHTML = slide1.value;
//
// slide1.oninput = function() {
//     output1.innerHTML = this.value;
// }


// ---------------------------new----------------------
var slide1 = document.getElementById("myRange1");
var output1 = document.getElementById("demo1");
var slide2 = document.getElementById("myRange2");
var output2 = document.getElementById("demo2");
var slide3 = document.getElementById("myRange3");
var output3 = document.getElementById("demo3");
output1.innerHTML = slide1.value; // Display the default slider value
output2.innerHTML = slide2.value;
output3.innerHTML = slide3.value;

// Update the current slider value (each time you drag the slider handle)
slide1.oninput = function() {
    output1.innerHTML = this.value;
}
slide2.oninput = function() {
    output2.innerHTML = this.value;
}
slide3.oninput = function() {
    output3.innerHTML = this.value;
}
