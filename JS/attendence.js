var attendence = {
  token: "123"  
}

function atten(form) {
  if (form.id.value == attendence.token) {
    document.getElementById("invalid_message").innerHTML = "Tack! Närvaro skickat.";
    document.getElementById("login").style.display ="none";
  } else {
    document.getElementById("invalid_message").innerHTML = "Fel inmattning kontakta din lärare";
  }
}