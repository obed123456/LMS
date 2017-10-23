function startTimer() {
    var tim = window.setTimeout("document.getElementById('smiley-rating-message').style.display = 'none';", 2500);

}

function smileyFunction() {
    document.getElementById('smiley-rating-message').innerHTML = 'Tack för din feedback!';
    document.getElementById('smiley-rating').style.display = 'none';
    startTimer();
}
