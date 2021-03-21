let myInput = document.getElementById("pswd1");
let repeatInput = document.getElementById("pswd2")
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("special sign");
let length = document.getElementById("length");

function checkPass() {
    // Validate lowercase letters
    let lowerCaseLetters = /[a-z]/;
    if (myInput.value.match(lowerCaseLetters)) {
        letter.remove();
    }

    // Validate capital letters
    let upperCaseLetters = /[A-Z]/;
    if (myInput.value.match(upperCaseLetters)) {
        capital.remove();
    }

    // Validate special numbers
    let specialSign = /[!@#$%^&*]/;
    if (myInput.value.match(specialSign)) {
        number.remove();
    }

    // Validate length
    if (myInput.value.length >= 8) {
        length.remove();
    }

    if (repeatInput.value === myInput.value) {
        document.getElementById("repeatMessage").remove();
    }
}


