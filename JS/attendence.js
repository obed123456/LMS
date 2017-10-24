var attendence = {
  token: "123"  
}

function atten(form) {
  if (form.id.value == attendence.token) {
    document.getElementById("valid_message").innerHTML = "Tack! Närvaro skickat.";
    form.id.value = '';
    // document.getElementById("login").style.display ="none";
    document.getElementById("atten_btn").disabled = true;

  } else {
    document.getElementById("enterkod_code_message").innerHTML = "Fel inmattning kontakta din lärare";
  }
}