let courseId = document.getElementById("course_id");
let courseName = document.getElementById("course_name");
let courseLink = document.getElementById("course_link");
let courseType = document.getElementById("course_type");
let courseToSatisfy = document.getElementById("course_to_satisfy");
let courseECTS = document.getElementById("course_ects");
let courseSyllabus = document.getElementById("syllabus_choose");
let courseRequestAddButton = document.getElementById("add");
let sendRequestListButton = document.getElementById("send");

courseRequestAddButton.addEventListener('click', addCourseRequest);
sendRequestListButton.addEventListener('click', sendRequestList);
courseType.addEventListener('change', updateToSatisfy);
function addCourseRequest() {
    console.log("add request works");
}

function updateToSatisfy() {
    let type = courseType.value;
    courseToSatisfy.disabled = ( type === "14" );
}

function sendRequestList() {
    console.log("hope");
}

document.getElementById("table").innerHTML = ' <tr>'+
'<td id="courseID">01</td>'+
'<td id="courseName">India</td>'+
'<td id="ECTS">Souvik Kundu</td>'+
'<td id="previouslyAccepted">Bootstrap Stuido</td>'+
'<td><button class="btn btn-primary" id="updateCourseButton" onclick="updateCourse()" type="button" style="background-color: var(--bs-orange);margin-left: 1rem;height: 1.5rem;padding-top: 0px;">Update</button><button class="btn btn-primary" id="deleteCourseButtonInstructor" onclick="deleteCourse()" type="button" style="background-color: var(--bs-red);margin-left: 1rem;height: 1.5rem;padding-top: 0px;">Delete</button></td>'+
'</tr>';
let courseID = document.getElementById("updateCourseButton").closest('tr');
console.log(courseID.cells[0].textContent);
//ow.cells[0].textContent
function sendCourseRequestList(){
}