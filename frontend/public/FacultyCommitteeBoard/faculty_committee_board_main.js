let preApprovalListButton = document.getElementById("preapproval_list_view");
let courseTransferListButton = document.getElementById("course_transfer_list_view");

preApprovalListButton.addEventListener('click', goPreapproval);
courseTransferListButton.addEventListener('click', goCourseTransfer);

function goPreapproval() {
    console.log("this works");
}

function goCourseTransfer() {
    console.log("also works");
}

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