document.getElementById("resetButton").onclick = function() {
    let inputPassword = document.getElementById("inputPassword").value;
    let inputPasswordReEntered = document.getElementById("reEnterPassword").value;

    //variables to check if a password consists of
    var lowerCaseLetters =  /^(?=.*[a-z])/;
    var upperCaseLetters =  /^(?=.*[A-Z])/;
    var numbers = /^(?=.*[0-9])/;
    var specialCharacters = /^(?=.*[!?@#.$%^&*])/;
    var link = location.href; //to reach the current page's link

    //Checking for each corner case of a false password entered
    if (inputPasswordReEntered.length === 0 && inputPassword.length === 0){
        alert("You didn't enter anything!!!")
    }
    else if ( inputPassword.length === 0 && inputPasswordReEntered.length !== 0){
        alert("Please enter password!");
    }
    else if ( inputPassword.length !== 0 && inputPasswordReEntered.length === 0){
        alert("Please re-enter password!");
    }
    else if (inputPassword.length < 8 && inputPasswordReEntered.length < 8){
        alert("Both passwords must contain at least 8 characters!!")
    }
    else if (inputPassword.length < 8 && inputPasswordReEntered.length > 8){
        alert("The password must contain at least 8 characters!");
    }
    else if (inputPassword.length > 8 && inputPasswordReEntered.length < 8){
        alert("The re-entered password must contain at least 8 characters!");
    }
    else if (!inputPassword.match(lowerCaseLetters)){
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
    else if (inputPassword !== inputPasswordReEntered){
        alert("Passwords must match!");
    } else {
        //debugging
        console.log(inputPassword);
        console.log(inputPasswordReEntered);
        console.log(link);
        var token = link.substring(link.length-32, link.length); //reaching token's Id
        console.log(token);

        //integration with backend code
        fetch("https://bilasmus.uc.r.appspot.com/auth/set", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "password": inputPassword,
                "token": token,
            }),
        }).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data);
            if (data.completed === true){
                alert("Your password was changed successfully!");
                window.location = "../login/login.html";
            } else{
                alert(data.message);
            }
        }).catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
    }
};