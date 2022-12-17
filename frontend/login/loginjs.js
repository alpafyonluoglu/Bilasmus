
//Login Function
document.getElementById("loginButton").onclick = function() {
  let inputEmail = document.getElementById("inputEmail").value;
  let inputPassword = document.getElementById("inputPassword").value;
  
  //if both email and password are not entered
  if ( inputEmail == "" && inputPassword == "" ){
    alert("You did not enter your email and password!");
  }
  // if email is not entered
  else if ( inputEmail == "" ){
    alert("You did not enter your email!");
  } 
  //if password is not entered
  else if ( inputPassword == "" ){
    alert("You did not enter your password!");
  }
  
  console.log(inputEmail);
  console.log(inputPassword);
  fetch("https://bilasmus.uc.r.appspot.com/").then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data);
  }).catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

  fetch("https://bilasmus.uc.r.appspot.com/auth/login", {
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
  });
    
    
    alert("button was clicked");
    //window.location.replace("../Coordinator/coordinator-home.html");
};