//Add User
document.getElementById("addUserButton").onclick = function (){
    let userNameInputAddUser = document.getElementById("userNameInputAddUser").value;
    let userSurnameInputAddUser = document.getElementById("userSurnameInputAddUser").value;
    let bilkentIDInputAddUser = document.getElementById("bilkentIDInputAddUser").value;
    let userEmailInputAddUser = document.getElementById("userEmailInputAddUser").value;
    let userTypeInputAddUser = document.getElementById("userTypeSelect").value;

    //Check for each box to be fulfilled
    if ( userNameInputAddUser === ""){
        alert("You did not enter the name");
    }
    if ( userSurnameInputAddUser === ""){
        alert("You did not enter the surname");
    }
    if ( bilkentIDInputAddUser === ""){
        alert("You did not enter the Bilkent ID");
    }
    if ( userEmailInputAddUser === "") {
        alert("You did not enter the e-mail address");
    }
    //debugging
    console.log(userNameInputAddUser);
    console.log(userSurnameInputAddUser);
    console.log(bilkentIDInputAddUser);
    console.log(userEmailInputAddUser);
    console.log(userTypeInputAddUser);

    //integrating with backend code
    fetch("https://bilasmus.uc.r.appspot.com/user/add/?s=" + getCookie("sessionID"), {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "name": userNameInputAddUser,
            "surname": userSurnameInputAddUser,
            "id": bilkentIDInputAddUser,
            "email": userEmailInputAddUser,
            "type": userTypeInputAddUser,
        }),
    }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        if (data.completed === true){
            alert("User is added!");
        }else{
            alert(data.message);
        }
    }).catch(function(err) {
        console.log('Fetch Error :-S', err);
    });
}

//Update User
document.getElementById("updateUserButton").onclick = function (){
    let bilkentIDInputUpdateUser = document.getElementById("bilkentIDInputUpdateUser").value;
    let newEmailInputUpdateUser = document.getElementById("newEmailInputUpdateUser").value;

    //Check for each box to be fulfilled
    if ( bilkentIDInputUpdateUser === ""){
        alert("You did not enter the Bilkent ID");
    }
    if ( newEmailInputUpdateUser === "") {
        alert("You did not enter the new e-mail address");
    }
    //debugging
    console.log(bilkentIDInputUpdateUser);
    console.log(newEmailInputUpdateUser);

    //integration with backend code
    fetch("https://bilasmus.uc.r.appspot.com/user/" + bilkentIDInputUpdateUser + "/update/?s=" + getCookie("sessionID"), {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "newEmail": newEmailInputUpdateUser,
        }),
    }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        if (data.completed === true){
            alert("User is updated!");
        }else{
            alert(data.message);
        }
    }).catch(function(err) {
        console.log('Fetch Error :-S', err);
    });
}

//Delete User
document.getElementById("deleteUserButton").onclick = function (){
    let bilkentIDInputDeleteUser = document.getElementById("bilkentIDInputDeleteUser").value;

    //Check for each box to be fulfilled
    if ( bilkentIDInputDeleteUser === ""){
        alert("You did not enter the Bilkent ID");
    }

    //debugging
    console.log(bilkentIDInputDeleteUser);

    //integration with backend code
    fetch("https://bilasmus.uc.r.appspot.com/user/" + bilkentIDInputDeleteUser + "/?s=" + getCookie("sessionID"), {
        method: "DELETE",
    }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        if (data.completed === true){
            alert("User is deleted!");
        }else{
            alert(data.message);
        }
    }).catch(function(err) {
        console.log('Fetch Error :-S', err);
    });
}

// Taken from W3Schools
function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}