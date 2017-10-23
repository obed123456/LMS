var attendence = {
  token: "123"  
}

function atten(form) {
  if (form.id.value == attendence.token) {
    document.getElementById("valid_message").innerHTML = "Tack! Närvaro skickat.";
    document.getElementById("login").style.display ="none";
  } else {
    document.getElementById("enterkod_code_message").innerHTML = "Fel inmattning kontakta din lärare";
  }
}