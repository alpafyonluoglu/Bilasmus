/*
    Methods for Coordinator Course TRansfer Forms
*/

//getting the user input 
document.getElementById("searchCourseTransfer").onclick = function(){
let searchedUser = document.getElementById("searchedName");
console.log(searchedUser.valuec);
}

//Sending the student name

//retrieving user names and making it into a dynamic table

//setting the file to download
/*
let link = document.getElementById("downloadCourseTransfer");

let file = document.getElementById("formFile");

console.log(link);
link.name = "is it working";
link.href = "file link coming from database";
*/


const input = document.getElementById('formFile');

const link = document.getElementById('downloadCourseTransfer');
//const submitButton = document.getElementById('submitButton');

let objectURL;

    /*
        When submit button is clicked
    */
    
    if ( input.files.length === 0 ){
    }else{
        const file = this.files[0];
        console.log(file);
        objectURL = URL.createObjectURL(file);
        console.log(objectURL);

        link.download = file.name;
        link.href = objectURL;
    }
        