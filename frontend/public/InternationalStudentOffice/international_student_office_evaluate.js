/*
    Methods for International Student Office Evaluate Page
*/
//Method for approving student language proficiency exam
function approve(){
    
}

//Method for rejecting student language proficiency exam
function reject(){
    
}

// Taken from W3Schools
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }