//Register Function
document.getElementById("signinButton").onclick = function() {
    let inputPassword = document.getElementById("inputPassword").value;
    let inputPasswordReEntered = document.getElementById("inputPassword-1").value;

    var lowerCaseLetters =  /^(?=.*[a-z])/;
    var upperCaseLetters =  /^(?=.*[A-Z])/;
    var numbers = /^(?=.*[0-9])/;
    var specialCharacters = /^(?=.*[!?@#$%^&*])/;

    //if no password entered
    if (inputPasswordReEntered.length == 0 && inputPassword.length == 0){
        alert("You didn't enter anything!!!")
    }
    else if ( inputPassword.length == 0 && inputPasswordReEntered.length != 0){
        alert("Please enter password!");
    }
    else if ( inputPassword.length != 0 && inputPasswordReEntered.length == 0){
        alert("Please re-enter password!");
    }
    else {
        if (inputPassword.length < 8 && inputPasswordReEntered.length < 8){
            alert("Both passwords must contain at least 8 characters!!")
        }
        else if (inputPassword.length < 8 && inputPasswordReEntered.length > 8){
            alert("The password must contain at least 8 characters!");
        }
        else if (inputPassword.length > 8 && inputPasswordReEntered.length < 8){
            alert("The re-entered password must contain at least 8 characters!");
        }
        else {
            if (!inputPassword.match(lowerCaseLetters)){
                alert("The password must contain lower-case characters!");
            }
            else if (!inputPassword.match(upperCaseLetters)){
                alert("The password must contain upper-case characters!");
            }
            else if (!inputPassword.match(numbers)){
                alert("The password must contain numbers!");
            }
            else if (!inputPassword.match(specialCharacters)){
                alert("The password must contain special characters!");
            }
            else if (!inputPasswordReEntered.match(lowerCaseLetters)){
                alert("The re-entered password must contain lower-case characters!");
            }
            else if (!inputPasswordReEntered.match(upperCaseLetters)){
                alert("The re-entered password must contain upper-case characters!");
            }
            else if (!inputPasswordReEntered.match(numbers)){
                alert("The re-entered password must contain numbers!");
            }
            else if (!inputPasswordReEntered.match(specialCharacters)){
                alert("The re-entered password must contain special characters!");
            }
            else {
                if (inputPassword != inputPasswordReEntered){
                    alert("Passwords must match!");
                }
            }
        }
    }

    console.log(inputPassword);
    console.log(inputPasswordReEntered);

    /*fetch("https://bilasmus.uc.r.appspot.com/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "email": inputEmail,
            "password": inputPassword,
        }),
    }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    }).catch(function(err) {
        console.log('Fetch Error :-S', err);
    });*/
};