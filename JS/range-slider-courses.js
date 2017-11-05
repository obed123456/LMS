var slide1 = document.getElementById("myRange1");
var output1 = document.getElementById("demo1");
output1.innerHTML = slide1.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slide1.oninput = function() {
    output1.innerHTML = this.value;
}
