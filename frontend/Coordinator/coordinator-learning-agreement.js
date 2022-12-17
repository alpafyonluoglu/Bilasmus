/*
    Methods for Coordinator Learning Agreement
*/

let studentName; //changed with database student names
let uploadDate = "1 November, 2022";
document.getElementById("fileNameLearningAgreement").innerHTML = studentName;
document.getElementById("studentNameLearningAgreement").innerHTML = studentName;
document.getElementById("dateLearningAgreement").innerHTML = uploadDate;

//if view is clicked
document.getElementById("viewLearningAgreement").onclick = function(){
    console.log("inside view");
};
//if approve button is clicked
document.getElementById("approveLearningAgreement").onclick = function(){
    console.log("inside approve");
    window.location.replace("coordinator-learning-agreement-upload.html");
};
//if reject button is clicked
document.getElementById("rejectLearningAgreement").onclick = function(){
    console.log("inside reject");
};
