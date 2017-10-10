var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var student =  {
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
if (form.id.value==student.id && form.pass.value==student.pass) {
// if (form.pass.value==student.pass) {
location="login.html";
} else if (form.id.value==teacher.id && form.pass.value==teacher.pass){
location="login.html";
} else if (form.id.value==admin.id && form.pass.value==admin.pass){
location="login.html"
} else {
alert("Invalid UserName or Password")
}
}
