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

//a function for adding a course request to course request list.
function addCourseRequest() {
}

//Disabling/Enabling course to satisfy input field
function updateToSatisfy() {
    let type = courseType.value;
    courseToSatisfy.disabled = ( type === "14" );
}

function sendRequestList() {
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

let tableHTML = document.getElementById("preapproval_list");

fetch("https://bilasmus.uc.r.appspot.com/file/pa/all/?s=" +  getCookie("sessionID"))
    .then((response) => {
        console.log("here");
        return response.json();
    }).then((data) => {
    console.log("maybe here");
    $.each(data, (index, data) => {
        console.log(data);

        tableHTML.innerHTML = tableHTML.innerHTML + '<div class="row"><div class="row">'+
            '<div class="col-xxl-1">'+
            '<div></div><img class="d-xxl-flex justify-content-xxl-center" src="assets/img/file.png" width="78" height="59" style="padding: 0px;align-content: center;height: 55px;">'+
            '</div>'+
            '<div class="col">'+
            '<div><label class="form-label" id="fileNamePreApproval" style="font-weight: bold;">Name Surname PreapprovalForm.pdf</label></div>'+
            '<div><label class="form-label text-start" style="padding: 30;height: 0px;width: 99px;">Student:</label><label class="form-label" id="studentNamePreApproval">Student Full Name</label></div>'+
            '<div><label class="form-label">Uploaded:</label><label class="form-label" id="datePreApproval">1 November 2022, 13:35</label></div>'+
            '<header></header>'+
            '</div>'+
            '<div class="col">'+
            '<div>'+
            '<div class="row">'+
            '<div class="col-xxl-4"><a class="btn btn-primary" id="viewPreApproval" type="button" download href="" style="background: var(--bs-gray-700);text-align: center;/*border-width: 4px;*/">View</a></div>'+
            '<div class="col-xxl-5"><a class="btn btn-primary" id="approvePreApproval" type="button" href="coordinator-preapproval-upload.html" style="background: #2E7D38;text-align: center;">Upload Signed Form</a></div>'+
            '<div class="col"><button class="btn btn-primary" id="rejectPreApproval" type="button"  onclick="rejectButton()" style="color: var(--bs-btn-active-color);background: #dd2d2b;/*border-radius: 10px;*//*margin: 10px;*/display: inline-block;text-align: center;padding: 10px;">Reject</button></div>'+
            '</div>'+
            '</div>'+
            '</div>'+
            '</div>'+
            '</div>';
        document.getElementById("studentNamePreApproval").innerHTML = data.name;
        document.getElementById("datePreApproval").innerHTML = data.uploadDate;
        document.getElementById("fileNamePreApproval").innerHTML = data.name;
        //document.getElementById("fileNamePreApproval").value = data.name;
        viewPreApproval.href = data.url;
        viewPreApproval.download = data.url;
    })

}).catch(function(err) {
    console.log('Fetch Error :-S', err);
});

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