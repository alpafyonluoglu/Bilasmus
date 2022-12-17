/*
    Methods for Coordinator Learning Agreement Form Upload Page
*/

const input = document.getElementById('preapprovalUpload');
const link = document.getElementById('downloadPreApproval');
const submitButton = document.getElementById('submitButton');

let objectURL;
function submitButtonPressed(){
    if ( input.files.length === 0 ){
        alert("You have not uploaded the file yet!");    
    } else{
        
    }
}
    /*
        When submit button is clicked
    */
    function downloadFileLink(){
        if ( input.files.length === 0 ){
            alert("You have not uploaded a file yet!");
        } else{
            const file = this.files[0];
            objectURL = URL.createObjectURL(file);
            link.download = file.name;
            link.href = objectURL;
        }
        
    }
        
 