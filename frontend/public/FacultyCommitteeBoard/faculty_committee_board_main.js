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