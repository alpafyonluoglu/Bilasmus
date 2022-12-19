/*
    Methods for International Student Office Main Page
*/
function setDate(){
    let setDate = document.getElementById("date_input").value;
    let setLanguage = document.getElementById("set_language").value;
    
    //if both date nad language were not entered
    if ( setDate.length === 0 && setLanguage.lenght === 0 ){
        alert("Both date and language must be specified!");
    }
    //if date was not entered
    else if ( setDate.length === 0 ){
        alert("Date must be specified!");
    } // if langugae was not entered 
    else if ( setLanguage.lenght === 0 ){
        alert("Language must be specified!");
    } //if all info was entered 
    else{
        //send to info to the backend
        document.getElementById("date_display").innerHTML = setDate;
        document.getElementById("language_display").innerHTML = setLanguage;
        alert("You have successfully added the Language Profifency Exam Date");
    }
}

function deleteLanguageProficiencyExam(){
    document.getElementById("date_display").innerHTML = "";
    document.getElementById("language_display").innerHTML = "";
    alert("You have successfully deleted the Language Proficiency Exam Date");
}

function sendRegistrationLink(){
    let studentID = document.getElementById("student_id_input").value;
    let link = document.getElementById("registration_link_input").value;
    
    //if both studentID and link were not entered
    if ( studentID.length === 0 && link.length === 0 ){
        alert("StudentID and Registration link must be specified!");
    } //if studentID was not entered
    else if ( studentID === 0 ){
        alert("StudentID must be specified!");
    } //if link was not entered
    else if ( link === 0 ) {
        alert("Registration link must be specified!");
    } else {
        //send the info to the backend
        alert("You have successfully sent the registration link!");
    }
}

// Taken from W3Schools
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }