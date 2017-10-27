function myFunction() {
    var x = document.getElementById("exams");
    var background = document.getElementById("btn_overview").style.backgroundColor;
    
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("btn_overview").style.background = "rgb(255,145,0)";
    } else {
        x.style.display = "none";
        document.getElementById("btn_overview").style.background = "grey";
    }
}
function myFunction2() {
    var x = document.getElementById("excercise");
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("btn_overview2").style.background = "rgb(255,145,0)";
    } else {
        x.style.display = "none";
        document.getElementById("btn_overview2").style.background = "grey";

    }
}
function myFunction3() {
    var x = document.getElementById("messages");
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("btn_overview3").style.background = "rgb(255,145,0)";
    } else {
        x.style.display = "none";
        document.getElementById("btn_overview3").style.background = "grey";

    }
}
function myFunction4() {
    var x = document.getElementById("important");
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("btn_overview4").style.background = "rgb(255,145,0)";
    } else {
        x.style.display = "none";
        document.getElementById("btn_overview4").style.background = "grey";

    }
}



