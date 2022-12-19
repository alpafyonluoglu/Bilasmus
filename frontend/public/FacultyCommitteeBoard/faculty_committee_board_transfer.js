let tableHTML = document.getElementById("transfer_list");

//fetch function for transfer forms
fetch("https://bilasmus.uc.r.appspot.com/file/fcb/all/?s=" +  getCookie("sessionID"))
    .then((response) => {
        console.log("here");
        return response.json();
    }).then((data) => {
    let index = 0;
    console.log("maybe here");
    $.each(data, (index, data) => {
        console.log(data);

        tableHTML.innerHTML = tableHTML.innerHTML + '<div class="row"><div class="row">'+
            '<div class="col-xxl-1">'+
            '<div></div><img class="d-xxl-flex justify-content-xxl-center" src="assets/img/file.png" width="78" height="59" style="padding: 0px;align-content: center;height: 55px;">'+
            '</div>'+
            '<div class="col">'+
            '<div><label class="form-label" id="fileNamePreApproval'+index+'" style="font-weight: bold;">Name Surname PreapprovalForm.pdf</label></div>'+
            '<div><label class="form-label text-start" style="padding: 30;height: 0px;width: 99px;">Student:</label><label class="form-label" id="studentNamePreApproval'+index+'">Student Full Name</label></div>'+
            '<div><label class="form-label">Uploaded:</label><label class="form-label" id="datePreApproval'+index+'">1 November 2022, 13:35</label></div>'+
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
        document.getElementById("studentNamePreApproval"+index).innerHTML = data.name;
        document.getElementById("datePreApproval"+index).innerHTML = data.uploadDate;
        document.getElementById("fileNamePreApproval"+index).innerHTML = data.name;
        //document.getElementById("fileNamePreApproval").value = data.name;
        viewPreApproval.href = data.url;
        viewPreApproval.download = data.url;
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