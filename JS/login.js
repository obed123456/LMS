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

  if (form.id.value === student.id) {
  if (form.pass.value === student.pass){
    location="login.html";
  } else if (form.id.value === teacher.id) {
    if (form.pass.value === teacher.pass){
      location="login.html";
  } else if (form.id.value === admin.id) {
     if (form.pass.value === admin.pass){
        location="login.html";
      } else {
      alert("invalid password")
    }
        }
    else { alert("invalid password")
  }
}
}
}
