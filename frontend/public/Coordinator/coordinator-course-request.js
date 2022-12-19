/*
    Methods for Coordinator Course Request Page- Managing Button clicks
*/


/*
    Backend connection maintained, new html created
*/
let tableHTML = document.getElementById("column");
fetch("https://bilasmus.uc.r.appspot.com/file/cr/all/all?s=" +  getCookie("sessionID"))
.then((response) => {
    console.log("here");
    return response.json();
  }).then((data) => {
    let index = 0;
    console.log("maybe here");
      $.each(data, (index, data) => {
        console.log(data);
        tableHTML.innerHTML = tableHTML.innerHTML + '<div  class="row">'+
        '<div class="col-xxl-1">'+
            '<img class="d-xxl-flex justify-content-xxl-center" src="assets/img/file.png" width="78" height="59" style="padding: 0px;align-content: center;height: 55px;">'+
        '</div>'+
        '<div class="col">'+
            '<div><label class="form-label" id="fileID'+index+'" style="font-weight: bold;">Name Surname PreapprovalForm.pdf</label></div>'+
            '<div><label class="form-label text-start" style="padding: 30;height: 0px;width: 99px;">Student:</label><label class="form-label" id="studentName'+index+'">Student Full Name</label></div>'+
            '<div><label class="form-label">Uploaded:</label><label class="form-label" id="date'+index+'">1 November 2022, 13:35</label></div>'+
        '</div>'+
        '<div class="col">'+
            '<div>'+
                '<div class="row">'+
                    '<div class="col-xxl-4"><button class="btn btn-primary" id="viewCourseRequest" type="button"  style="background: var(--bs-gray-700);text-align: center;"><a href="coordinator-detailed.html"><span style="color: rgb(255, 255, 255);">View</span><br></a></button></div>'+
                    '<div class="col-xxl-5"><button class="btn btn-primary" id="uploadCourseRequest" type="button" onclick="approveButton()" style="background: #2E7D38;text-align: center;">Approve</button></div>'+
                    '<div class="col"><button class="btn btn-primary" id="rejectCourseRequest" onclick="rejectButton()" type="button" style="color: var(--bs-btn-active-color);background: #dd2d2b;/*border-radius: 10px;*//*margin: 10px;*/display: inline-block;text-align: center;padding: 10px;">Reject</button></div>'+
                '</div>'+
            '</div>'+
        '</div>' + '</div>';
        
        //assign data value to UI
        console.log(index);
        console.log("fileNameLearningAgreement");
        document.getElementById("fileID"+index).innerHTML = data.name;
        document.getElementById("studentName"+index).innerHTML = data.uploadDate;
        document.getElementById("date"+index).innerHTML = data.name;
        
        viewLearningAgreement.href = data.url;
        viewLearningAgreement.download = data.url;
        
        //increase row counter
        index++;
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