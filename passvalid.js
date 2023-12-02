var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

//When the user clicks on the password field, show the message box
myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

// When the clicks outside of the password field, hide the message box
myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
    //Validate lovercase letters
    var lowercaseletters = /[a-z]/g;
    if(myInput.value.match(lowercaseletters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        
    }
}