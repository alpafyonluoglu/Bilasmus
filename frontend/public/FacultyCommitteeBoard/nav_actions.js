let logoutButton = document.getElementById("logout_faculty");
let messageButton = document.getElementById("message_faculty");
let bellButton = document.getElementById("bell_faculty");
let profileButton = document.getElementById("profile_faculty");

logoutButton.addEventListener('click', logoutFaculty);
messageButton.addEventListener('click', messageActionFaculty);
bellButton.addEventListener('click', bellActionFaculty);
profileButton.addEventListener('click', profileActionFaculty);
function  logoutFaculty() {
    console.log("logout");
}

function messageActionFaculty() {
    console.log("message");
}

function bellActionFaculty() {
    console.log("bell");
}

function profileActionFaculty() {
    console.log("profile");
}
