function myFunction() {
    var x = document.getElementById("exams");//this function takes exams sections
    var background = document.getElementById("btn_overview").style.backgroundColor;//backgroound variable contains background color of button.
    
    if (x.style.display === "none") {//by default diplay is != none which mean text shows under.
        x.style.display = "block"; // everything in div exams shows here
        document.getElementById("btn_overview").style.background = "rgb(255,145,0)";//button color changes aswell
    } else {
        x.style.display = "none"; //if display is none
        document.getElementById("btn_overview").style.background = "grey";//background color changes into grey
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



