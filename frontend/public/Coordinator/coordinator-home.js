/*
    Methods for the Coordinator home page
*/


//Populate Course Request Table
document.getElementById("courseRequestTable").innerHTML= '<tr>'+
'<td id="studentName" data-label="Attributes" scope="row">Selin</td>'+
'<td id="uploadStatus" data-label="Simulated Case">Uploaded</td>'+
'</tr>'+
'<tr>'+
'<td id="studentName" data-label="Attributes" scope="row">Arda</td>'+
'<td id="uploadStatus" data-label="Simulated Case">Not Uploaded</td>'+
'</tr>';

let studentName = document.getElementById("studentName").closest('tr').cells[0].textContent;
let fileStatus = document.getElementById("uploadStatus").closest('tr').cells[1].textContent;
console.log(studentName);
console.log(fileStatus);


document.getElementById("courseRequestTable").innerHTML= '<tr>'+
'<td id="studentNameCourse" data-label="Attributes" scope="row">Selin</td>'+
'<td id="uploadStatusCourse" data-label="Simulated Case">Uploaded</td>'+
'</tr>'+
'<tr>'+
'<td id="studentNameCourse" data-label="Attributes" scope="row">Arda</td>'+
'<td id="uploadStatusCourse" data-label="Simulated Case">Not Uploaded</td>'+
'</tr>';



document.getElementById("preApprovalTable").innerHTML= '<tr>'+
'<td id="studentNamePreapproval" data-label="Attributes" scope="row">Selin</td>'+
'<td id="uploadStatusPreapproval" data-label="Simulated Case">Uploaded</td>'+
'</tr>'+
'<tr>'+
'<td id="studentNamePreapproval" data-label="Attributes" scope="row">Arda</td>'+
'<td id="uploadStatusPreapproval" data-label="Simulated Case">Not Uploaded</td>'+
'</tr>';



document.getElementById("learningAgreementATable").innerHTML= '<tr>'+
'<td id="studentNameLA" data-label="Attributes" scope="row">Selin</td>'+
'<td id="uploadStatusLA" data-label="Simulated Case">Uploaded</td>'+
'</tr>'+
'<tr>'+
'<td id="studentNameLA" data-label="Attributes" scope="row">Arda</td>'+
'<td id="uploadStatusLA" data-label="Simulated Case">Not Uploaded</td>'+
'</tr>';

