let logoutButton = document.getElementById("logout");
let messageButton = document.getElementById("message");
let bellButton = document.getElementById("bell");
let profileButton = document.getElementById("profile");

logoutButton.addEventListener('click', logout);
messageButton.addEventListener('click', messageAction);
bellButton.addEventListener('click', bellAction);
profileButton.addEventListener('click', profileAction);

function  logout() {
    console.log("logout");
}

function messageAction() {
    console.log("message");
}

function bellAction() {
    console.log("bell");
}

function profileAction() {
    console.log("profile");
}