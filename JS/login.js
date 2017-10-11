var modal = document.getElementById('id01');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var student = {
  id: "student",
  pass: "pass"
}
var teacher = {
  id: "teacher",
  pass: "pass"
}
var admin = {
  id: "admin",
  pass: "pass"
}

function pasuser(form) {
  if (form.id.value == student.id && form.pass.value == student.pass) {
    // if (form.pass.value==student.pass) {
    location = "login.html";
  } else if (form.id.value == teacher.id && form.pass.value == teacher.pass) {
    location = "login.html";
  } else if (form.id.value == admin.id && form.pass.value == admin.pass) {
    location = "login.html"
  } else {
    alert("Invalid Username or Password")
  }
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

function myFunction(a) {
  a.parentNode.getElementsByClassName("dropdown-content")[0].classList.toggle("show");
}