var attendence = {
  token: "123"  
}

function atten(form) {
  if (form.id.value == attendence.token) {
    document.getElementById("valid_message").innerHTML = "Tack! Närvaro skickat.";
    form.id.value = '';
    // document.getElementById("login").style.display ="none";
    document.getElementById("enterkod_code_message").style.display ="none";
    document.getElementsByName("myButton")[0].disabled = true;
    document.getElementsByName("id")[0].disabled = true;
    document.getElementsByName("myButton")[0].style.background ="grey";
    document.getElementsByName("id")[0].placeholder = "Närvaro skickat";

  } else {
    document.getElementById("enterkod_code_message").innerHTML = "Fel inmattning kontakta din lärare";
    form.id.value = '';
  }
}