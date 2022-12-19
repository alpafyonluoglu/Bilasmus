/*
    Methods for Coordinator Learning Agreement Form Upload Page
*/

//Method to create html  
document.getElementById('table').innerHTML = '<div  class="col-xxl-1">'+
'<div></div><img class="d-xxl-flex justify-content-xxl-center" src="assets/img/file.png" width="78" height="59" style="padding: 0px;align-content: center;height: 55px;">'+
'</div>'+
'<div class="col">'+
'<div><label class="form-label" id="fileNameLearningAgreement" style="font-weight: bold;">Name Surname PreapprovalForm.pdf</label></div>'+
'<div><label class="form-label text-start" style="padding: 30;height: 0px;width: 99px;">Student:</label><label class="form-label" id="studentNameLearningAgreement">Student Full Name</label></div>'+
'<div><label class="form-label">Uploaded:</label><label class="form-label" id="dateLearningAgreement">1 November 2022, 13:35</label></div>'+
'<header></header>'+
'</div>'+
'<div class="col">'+
'<div>'+
'<div class="row">'+
'<div class="col-xxl-4"><button class="btn btn-primary" id="viewLearningAgreement" type="button" style="background: var(--bs-gray-700);text-align: center;/*border-width: 4px;*/">View</button></div>'+
'<div class="col-xxl-5"><button class="btn btn-primary" id="approveLearningAgreement" type="button" style="background: #2E7D38;text-align: center;">Upload Signed Form</button></div>'+
'<div class="col"><button class="btn btn-primary" id="rejectLearningAgreement" type="button" style="color: var(--bs-btn-active-color);background: #dd2d2b;/*border-radius: 10px;*//*margin: 10px;*/display: inline-block;text-align: center;padding: 10px;">Reject</button></div>'+
'</div>'+
'</div>'+
'</div>';


    
 // Taken from W3Schools
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }