/*
    Methods for the Course Request Detailed Page
*/
//if link is pressed
document.getElementById("link").onclick= function(){
    
};
//if syllabus is pressed

document.getElementById("syllabus").onclick= function(){
    
};
//if approve is pressed

document.getElementById("approve").onclick= function(){
    
};
//if reject is pressed
document.getElementById("reject").onclick= function(){
    console.log("workingg");
};

var table = document.getElementById("table");
if ( true ){
    
    document.getElementById("table").innerHTML = ' <tr> <td id="coursenameCourseRequest" > CE319 - Object Oriented Programming</td>' +
    '<td id="typeCourseRequest">Mandatory</td>' +
    '<td id="evaluatedCourseRequest">Approved</td>'+
    '<td><button class="btn btn-primary" id="linkCourseRequest" type="button" style="background: var(--bs-gray);">Link<a href="#" style="color: var(--bs-btn-disabled-color);text-decoration:  underline;"></a></button></td>'+
    ' <td><button class="btn btn-primary" id="syllabusCourseRequest" type="button" style="background: var(--bs-gray);">woow<a href="#" style="text-decoration:  underline;"><br></a></button></td>'+
    ' <td><button class="btn btn-primary" id="approveCourseRequests" type="button" style="background: #2E7D38;">Approve<a href="#" style="text-decoration:  underline;"></a></button><button class="btn btn-primary" id="rejectCourseRequests" type="button" style="background: #dd2d2b;">Reject<a href="#" style="text-decoration:  underline;"></a></button></td></tr>';
    
   document.getElementById("coursenameCourseRequest").innerHTML = "Harika";
   document.getElementById("approveCourseRequests").innerHTML = "Harika";

   
    let row = table.insertRow();
    let courseName = row.insertCell(0);
    let courseType = row.insertCell(1);
    let instructorEvaluation = row.insertCell(2);
    let courseLink = row.insertCell(3);
    let syllabus = row.insertCell(4);
    let finalDecision = row.insertCell(5);
    
    cell1.innerHTML = "Empty";
   // <tr class="warning no-result">
   // <td colspan="12"><i class="fa fa-warning"></i>&nbsp; No Result !!!</td>
   // </tr>
} else {
    //items must be the json value
    courses.forEach( course => {
            let row = table.insertRow();
            let courseName = row.insertCell(0);
            let courseType = row.insertCell(1);
            let instructorEvaluation = row.insertCell(2);
            
            let courseLink = row.insertCell(3);
            let syllabus = row.insertCell(4);
            let approve = row.insertCell(5);
            let reject = row.insertCell(5);


            var linkButton = document.createElement('input');
            var syllabusButton = document.createElement('input');
            var approveButton = document.createElement('input');
            var rejectButton = document.createElement('input');

            courseLink.appendChild(linkButton);
            syllabus.appendChild(syllabusButton);
            approve.appendChild(approveButton);
            reject.appendChild(rejectButton);

            
            courseName.value = course.value;
            courseType.value = course.type;
            instructorEvaluation.value = course.instructorEvaluated;


            
            linkButton.type = "button";
            linkButton.className = "btn btn-primary";
            linkButton.value = "Link";
            //linkButton.href = course.link;
            linkButton.setAttribute('href',course.link);
            linkButton.setAttribute('download', course.link);
            linkButton.setAttribute('class', "btn btn-primary");
            linkButton.style.backgroundColor = "green";


            
            syllabusButton.type = "button";
            syllabusButton.className = "btn btn-primary";
            syllabusButton.value = "Syllabus";
            //syllabusButton.href = course.syllabus;
            syllabusButton.setAttribute('href',course.syllabus);
            syllabusButton.setAttribute('download', course.syllabus);
            
            
            approveButton.type = "submit";
            approveButton.className = "btn btn-primary";
            approveButton.value = "Approve";
            //syllabusButton.href = course.syllabus;
            approveButton.setAttribute('href',course.syllabus);
            approveButton.setAttribute('download', course.syllabus);
            approveButton.setAttribute('onclick','approveFile();'); // for FF
            approveButton.onclick = function() {approveFile();}; // for IE
            
            rejectButton.type = "submit";
            rejectButton.className = "btn btn-primary";
            rejectButton.value = "Reject";
            //syllabusButton.href = course.syllabus;
            rejectButton.setAttribute('href',course.syllabus);
            rejectButton.setAttribute('download', course.syllabus);
            rejectButton.setAttribute('onclick','rejectFile();'); // for FF
            rejectButton.onclick = function() {rejectFile();}; // for IE
            
      });
}
//Method for approve button
function approveFile(){
    //backend code
    alert("You have successfully approved the file!");
}
//Method for reject button
function rejectFile(){
    
}