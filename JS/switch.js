function accesslevel(form) {
 console.log(form.unameinput.value);
 switch (true) {
   case form.unameinput.value === "student" && form.pswinput.value === "pw":
     return window.open('login.html', '_self');
   case form.unameinput.value === "teacher" && form.pswinput.value === "pw":
     return window.open('pages/teacherpage.html', '_self');
   case form.unameinput.value == "admin" && form.pswinput.value == "pw":
     return window.open('pages/adminpage.html', '_self');
   default:
     document.getElementById('errortxt').style.display='flex';
 }
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function login() {
var user = document.getElementById("userName").value;
var pass = document.getElementById("password").value;
if(user == "student" && pass == "pass") {
    alert("Logged In");
    locate="login.html"
    return false;
} else {
    alert("wrong user/pass");
    return false;
    }
}
