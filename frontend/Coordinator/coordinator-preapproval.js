/*
    Method for processing Pre-Approval Page-Button clicks
*/
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