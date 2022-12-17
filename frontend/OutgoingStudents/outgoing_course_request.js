let courseId = document.getElementById("course_id");
let courseName = document.getElementById("course_name");
let courseLink = document.getElementById("course_link");
let courseType = document.getElementById("course_type");
let courseToSatisfy = document.getElementById("course_to_satisfy");
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