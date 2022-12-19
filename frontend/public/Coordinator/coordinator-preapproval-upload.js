/*
    Methods for Coordinator PreApproval File Upload Page
*/

const input = document.getElementById('preapprovalUpload');
const link = document.getElementById('downloadPreApproval');
const submitButton = document.getElementById('submitButton');

    
// Taken from W3Schools
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}