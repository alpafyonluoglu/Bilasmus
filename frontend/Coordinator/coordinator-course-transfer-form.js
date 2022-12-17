/*
    Methods for Coordinator Course TRansfer Forms
*/
//getting the user input 
function getUserInput(){
    let searchedUser = document.getElementById("searchedName").value;
    console.log(searchedUser);
}

//When a user is selected from the dynamic data table
function selectedStudent(){
    
    //get inputs by row 
    let name = document.getElementById("selectedUser");
    console.log(name.value);
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

//Method to activate the sending of a form to the backend
function sendFile(){
  console.log("file is sent");
}

//Method to download a file
function downloadFile(){
    const input = document.getElementById("formFile");

    const link = document.getElementById('downloadCourseTransfer');


    //const submitButton = document.getElementById('submitButton');
    
    let objectURL;
    
        /*
            When submit button is clicked
        */
        
        if ( input.files.length === 0 ){
            alert("No file has been uploaded!");
        }else{
            const file = input.files[0];
            console.log(file);
            let objectURL = URL.createObjectURL(file);
            link.download = file.name;
            link.href = objectURL;
        }
}
        