let logoutButton = document.getElementById("logout");
let messageButton = document.getElementById("message");
let bellButton = document.getElementById("bell");
let profileButton = document.getElementById("profile");

logoutButton.addEventListener('click', logoutOutgoing);
messageButton.addEventListener('click', messageActionOutgoing);
bellButton.addEventListener('click', bellActionOutgoing);
profileButton.addEventListener('click', profileActionOutgoing);

function  logoutOutgoing() {
    console.log("logout");
}

function messageActionOutgoing() {
    console.log("message");
}

function bellActionOutgoing() {
    console.log("bell");
}

function profileActionOutgoing() {
    console.log("profile");
}