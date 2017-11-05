function myfunction() {
  var x = document.getElementById("navbar-btn");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}