/*
    Methods for Coordinator Course TRansfer Forms
*/



document.getElementById("table").innerHTML= '<tr>'+
'<td>01</td>'+
'<td>India</td>'+
'<td>Souvik Kundu</td>'+
'<td>Bootstrap Stuido</td>'+
'<td><button class="btn btn-success" style="margin-left: 100px;" id="selectedUser" type="submit" onclick="selectedStudent()">Select</button></td>'+
'</tr>'+ 
'<tr>'+
'<td>01</td>'+
'<td>India</td>'+
'<td>Souvik Kundu</td>'+
'<td>Bootstrap Stuido</td>'+
'<td><button class="btn btn-success" style="margin-left: 100px;" id="selectedUser" type="submit" onclick="selectedStudent()">Select</button></td>'+
'</tr>';

//getting the user input 
function getUserInput(){
    let searchedUser = document.getElementById("searchedName").value;
    console.log(searchedUser);
}

//When a user is selected from the dynamic data table
function selectedStudent(){
    
    //get inputs by row 
    let name = document.getElementById("selectedUser");
    console.log(name.value);
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