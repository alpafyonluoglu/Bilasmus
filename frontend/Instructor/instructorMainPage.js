/*
    Methods for Instructor Main Page
*/

//if backend is empty
document.getElementById("table").innerHTML =' <tr class="warning no-result">'+
'<td colspan="12"><i class="fa fa-warning"></i>&nbsp; No Result !!!</td>'+
'</tr>';
//else

document.getElementById("table").innerHTML = ' <tr>'+
'<td id="studentName">01</td>'+
'<td id="courseName">India</td>'+
'<td id="courseType">Souvik Kundu</td>'+
'<td id="courseLink">Bootstrap Stuido</td>'+
'<td id="courseSyllabus">Syllabus Stuido</td>'+
'<td><button class="btn btn-primary" id="approveCourseButtonInstructor" onclick="approveCourse()" type="button" style="background-color: var(--bs-green);margin-left: 1rem;height: 1.5rem;padding-top: 0px;">Approve</button><button class="btn btn-primary" id="rejectCourseButtonInstructor" onclick="rejectCourse()" type="button" style="background-color: var(--bs-red);margin-left: 1rem;height: 1.5rem;padding-top: 0px;">Reject</button></td>'+
'</tr>';

function rejectCourse(){
    //backend reject 
}
function approveCourse(){
    //backend approve
}

//if there are not course requests to show
if ( true ){
    
}

//if there are course requests