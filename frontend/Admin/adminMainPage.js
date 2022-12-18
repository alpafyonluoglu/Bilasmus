fetch("https://bilasmus.uc.r.appspot.com/").then((response) => {
    return response.json();
  }).then((data) => {console.log(data);
  }).catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
//Add User
document.getElementById("addUserButton").onclick = function (){
    let userNameInputAddUser = document.getElementById("userNameInputAddUser").value;
    let userSurnameInputAddUser = document.getElementById("userSurnameInputAddUser").value;
    let bilkentIDInputAddUser = document.getElementById("bilkentIDInputAddUser").value;
    let userEmailInputAddUser = document.getElementById("userEmailInputAddUser").value;
    let userTypeInputAddUser = document.getElementById("userTypeSelect").value;

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
    console.log(userNameInputAddUser);
    console.log(userSurnameInputAddUser);
    console.log(bilkentIDInputAddUser);
    console.log(userEmailInputAddUser);
    console.log(userTypeInputAddUser);

    fetch("https://bilasmus.uc.r.appspot.com/user/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "name": userNameInputAddUser,
            "surname": userSurnameInputAddUser,
            "id": bilkentIDInputAddUser,
            "email": userEmailInputAddUser,
            "type": userTypeInputAddUser
        }),
    }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    }).catch(function(err) {
        console.log('Fetch Error :-S', err);
    });
}

//Update User
document.getElementById("updateUserButton").onclick = function (){
    let bilkentIDInputUpdateUser = document.getElementById("bilkentIDInputUpdateUser").value;
    let newEmailInputUpdateUser = document.getElementById("newEmailInputUpdateUser").value;

    if ( bilkentIDInputUpdateUser === ""){
        alert("You did not enter the Bilkent ID");
    }
    if ( newEmailInputUpdateUser === "") {
        alert("You did not enter the new e-mail address");
    }
    console.log(bilkentIDInputUpdateUser);
    console.log(newEmailInputUpdateUser);

    fetch("https://bilasmus.uc.r.appspot.com/user/" + bilkentIDInputUpdateUser + "/update", {
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
    }).catch(function(err) {
        console.log('Fetch Error :-S', err);
    });
}

//Delete User
document.getElementById("deleteUserButton").onclick = function (){
    let bilkentIDInputDeleteUser = document.getElementById("bilkentIDInputDeleteUser").value;

    if ( bilkentIDInputDeleteUser === ""){
        alert("You did not enter the Bilkent ID");
    }

    console.log(bilkentIDInputDeleteUser);

    fetch("https://bilasmus.uc.r.appspot.com/user/" + bilkentIDInputDeleteUser, {
        method: "DELETE",
    }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    }).catch(function(err) {
        console.log('Fetch Error :-S', err);
    });
}