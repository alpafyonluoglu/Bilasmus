/*
    Method for processing Pre-Approval Page-Button clicks
*/


//Backend Connection
document.getElementById("column").innerHTML = 
'<div class="row">'+
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
                '<div class="col-xxl-5"><button class="btn btn-primary" id="approvePreApproval" type="button" style="background: #2E7D38;text-align: center;">Upload Signed Form</button></div>'+
                '<div class="col"><button class="btn btn-primary" id="rejectPreApproval" type="button" style="color: var(--bs-btn-active-color);background: #dd2d2b;/*border-radius: 10px;*//*margin: 10px;*/display: inline-block;text-align: center;padding: 10px;">Reject</button></div>'+
            '</div>'+
        '</div>'+
    '</div>'+
'</div>';

document.getElementById("fileNamePreApproval").innerHTML = "What is this";
forms.forEach( form => {
    document.getElementById("column").innerHTML = 
    '<div class="row">'+
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
                    '<div class="col-xxl-5"><button class="btn btn-primary" id="approvePreApproval" type="button" style="background: #2E7D38;text-align: center;">Upload Signed Form</button></div>'+
                    '<div class="col"><button class="btn btn-primary" id="rejectPreApproval" type="button" style="color: var(--bs-btn-active-color);background: #dd2d2b;/*border-radius: 10px;*//*margin: 10px;*/display: inline-block;text-align: center;padding: 10px;">Reject</button></div>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</div>';
});
document.getElementById("viewPreApproval").href = hrefOfUser;

document.getElementById("viewPreApproval").onclick = function(){
    //if view button is clicked
    console.log("view clicked preapproval");

}
document.getElementById("approvePreApproval").onclick = function(){
    //if view button is clicked
console.log("approve clicked preapproval");
window.location.replace("coordinator-preapproval-upload.html");

}
document.getElementById("rejectPreApproval").onclick = function(){
    //if view button is clicked
console.log("reject clicked preapproval");

}