//Retrieving all interactive components in the page
let check1 = document.getElementById("formCheck-1");
let check2 = document.getElementById("formCheck-2");
let check3 = document.getElementById("formCheck-3");
let check4 = document.getElementById("formCheck-4");
let check5 = document.getElementById("formCheck-5");

//Adding event listeners to interactive components
check1.addEventListener('change', updateProgress);
check2.addEventListener('change', updateProgress);
check3.addEventListener('change', updateProgress);
check4.addEventListener('change', updateProgress);
check5.addEventListener('change', updateProgress);

//Updating progress bar function
function updateProgress() {
    //making the algebra of the bar.
    let progress = 0;
    if(check1.checked) progress = progress + 1;
    if(check2.checked) progress = progress + 1;
    if(check3.checked) progress = progress + 1;
    if(check4.checked) progress = progress + 1;
    if(check5.checked) progress = progress + 1;
     progress = progress * 20;
    let updateBar = document.getElementById("progress_bar");
    console.log(progress.toString() + "%");
    updateBar.innerHTML = progress.toString() + "%"; //Updating the inner html of the bar
    updateBar.style.width = progress.toString() + "%"; //Updating the filled width of the bar
};


document.getElementById("table").innerHTML = ' <tr>'+
'<td id="courseID">01</td>'+
'<td id="courseName">India</td>'+
'<td id="ECTS">Souvik Kundu</td>'+
'</tr>';
//let courseID = updateCourseButton.closest('tr');
//console.log(courseID.cells[1].textContent);
//ow.cells[0].textContent
function sendCourseRequestList(){
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