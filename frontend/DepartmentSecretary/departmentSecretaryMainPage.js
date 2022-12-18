/*
    Methods for the Department Secretary Main Page
*/


document.getElementById("table").innerHTML =' <tr class="warning no-result">'+
'<td colspan="12"><i class="fa fa-warning"></i>&nbsp; No Result !!!</td>'+
'</tr>';
//else

document.getElementById("table").innerHTML = ' <tr>'+
'<td id="ID">01</td>'+
'<td id="studentName">India</td>'+
'<td id="courseName">Souvik Kundu</td>'+
'<td><button class="btn btn-primary" id="approveCourseButton" onclick="approveCourse()" type="button" style="background-color: var(--bs-green);margin-left: 1rem;height: 1.5rem;padding-top: 0px;">Approve</button><button class="btn btn-primary" id="rejectCourseButton" onclick="rejectCourse()" type="button" style="background-color: var(--bs-red);margin-left: 1rem;height: 1.5rem;padding-top: 0px;">Reject</button></td>'+
'</tr>';
//Method to approve courses
function approveCourse(){
    //backend connection
}
//Method to reject courses
function rejectCourse(){
    //backend connection
}