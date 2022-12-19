/*
    Methods for the Course Request Detailed Page
*/

var table = document.getElementById("table");
if ( true ){
    
    document.getElementById("table").innerHTML = ' <tr> <td id="coursenameCourseRequest" > CE319 - Object Oriented Programming</td>' +
    '<td id="typeCourseRequest">Mandatory</td>' +
    '<td id="evaluatedCourseRequest">Approved</td>'+
    '<td><button class="btn btn-primary" id="linkCourseRequest" type="button" style="background: var(--bs-gray);">Link<a href="#" style="color: var(--bs-btn-disabled-color);text-decoration:  underline;"></a></button></td>'+
    ' <td><button class="btn btn-primary" id="syllabusCourseRequest" type="button" style="background: var(--bs-gray);">woow<a href="#" style="text-decoration:  underline;"><br></a></button></td>'+
    ' <td><button class="btn btn-primary" id="approveCourseRequests" type="button" style="background: #2E7D38;">Approve<a href="#" style="text-decoration:  underline;"></a></button><button class="btn btn-primary" id="rejectCourseRequests" type="button" style="background: #dd2d2b;">Reject<a href="#" style="text-decoration:  underline;"></a></button></td></tr>';
    
   document.getElementById("coursenameCourseRequest").innerHTML = "Harika";
   document.getElementById("approveCourseRequests").innerHTML = "Harika";

   
    let row = table.insertRow();
    let courseName = row.insertCell(0);
    let courseType = row.insertCell(1);
    let instructorEvaluation = row.insertCell(2);
    let courseLink = row.insertCell(3);
    let syllabus = row.insertCell(4);
    let finalDecision = row.insertCell(5);
    
    cell1.innerHTML = "Empty";
   // <tr class="warning no-result">
   // <td colspan="12"><i class="fa fa-warning"></i>&nbsp; No Result !!!</td>
   // </tr>
}
//Method for approve button
function approveFile(){
    //backend code
    alert("You have successfully approved the file!");
}
//Method for reject button
function rejectFile(){
    
}

// Taken from W3Schools
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }