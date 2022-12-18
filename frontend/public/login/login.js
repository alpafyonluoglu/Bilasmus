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
    if (data.loggedIn === true){
      setCookie("sessionID",data.sessionID,1/24);
      switch (data.user.type) {
        case "a":
          window.location = "../Admin/adminMainPage.html";
          break;
        case "c":
          window.location = "../Coordinator/coordinator-home.html";
          break;
        case "ds":
          window.location = "../DepartmentSecretary/departmentSecretaryMainPage.html";
          break;
        case "fcb":
          window.location = "../FacultyCommitteeBoard/faculty_committee_board_main.html";
          break;
        case "ig":
          window.location = "../IncomingStudents/incoming_main.html";
          break;
        case "iof":
          window.location = "../InternationalStudentOffice/international_student_office_main.html";
          break;
        case "i":
          window.location = "../Instructor/instructorMainPage.html";
          break;
        default: // "og"
          window.location = "../OutgoingStudents/outgoing_main.html";
          break;
      }
    }
    else {
      alert("The password and email doesn't match!");
    }
  }).catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
};

// Taken from W3Schools
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}