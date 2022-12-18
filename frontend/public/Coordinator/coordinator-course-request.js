/*
    Methods for Coordinator Course Request Page- Managing Button clicks
*/

document.getElementById("viewCourseRequest").onclick = function(){
    //if view is clicked
    console.log("view is clicked");
}
document.getElementById("uploadCourseRequest").onclick = function(){
    //if approve is clicked
    console.log("approve is clicked");
}
document.getElementById("rejectCourseRequest").onclick = function(){
    //if reject is clicked
    console.log("reject is clicked");
}

//for loop
document.getElementById("column").innerHTML ='<div  class="row">'+
'<div class="col-xxl-1">'+
    '<div></div><img class="d-xxl-flex justify-content-xxl-center" src="assets/img/file.png" width="78" height="59" style="padding: 0px;align-content: center;height: 55px;">'+
'</div>'+
'<div class="col">'+
    '<div><label class="form-label" id="fileID" style="font-weight: bold;">Name Surname PreapprovalForm.pdf</label></div>'+
    '<div><label class="form-label text-start" style="padding: 30;height: 0px;width: 99px;">Student:</label><label class="form-label" id="studentName">Student Full Name</label></div>'+
    '<div><label class="form-label">Uploaded:</label><label class="form-label" id="date">1 November 2022, 13:35</label></div>'+
'</div>'+
'<div class="col">'+
    '<div>'+
        '<div class="row">'+
            '<div class="col-xxl-4"><button class="btn btn-primary" id="viewCourseRequest" type="button"  style="background: var(--bs-gray-700);text-align: center;/*border-width: 4px;*/"><a href="coordinator-detailed.html"><span style="color: rgb(255, 255, 255);">View</span><br></a></button></div>'+
            '<div class="col-xxl-5"><button class="btn btn-primary" id="uploadCourseRequest" type="button" style="background: #2E7D38;text-align: center;">Approve</button></div>'+
            '<div class="col"><button class="btn btn-primary" id="rejectCourseRequest" type="button" style="color: var(--bs-btn-active-color);background: #dd2d2b;/*border-radius: 10px;*//*margin: 10px;*/display: inline-block;text-align: center;padding: 10px;">Reject</button></div>'+
        '</div>'+
    '</div>'+
'</div>'+
'</div>';
document.getElementById("fileID").innerHTML = "getFileName";
document.getElementById("studentName").innerHTML = "studentName";
document.getElementById("date").innerHTML = "dateFormat";