/*
    Methods for Coordinator PreApproval File Upload Page
*/

const input = document.getElementById('preapprovalUpload');
const link = document.getElementById('downloadPreApproval');
const submitButton = document.getElementById('submitButton');

let objectURL;

    /*
        When submit button is clicked
    */
    function submitButtonPressed() {
    
    if ( input.files.length === 0 ){
        alert("You have not uploaded the file yet!");    
    }
}    

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
        
        
       
    /*
    
    
     
        if (objectURL) {
          // revoke the old object url to avoid using more memory than needed
          URL.revokeObjectURL(objectURL);  
        }
      
        const file = this.files[0];
        console.log(file);
 
        
       objectURL = URL.createObjectURL(file);
      
        link.download = "https://storage.googleapis.com/bilasmus.appspot.com/Untitled (Draft).pdf"; // this name is used when the user downloads the file
        link.href = "https://storage.googleapis.com/bilasmus.appspot.com/Untitled (Draft).pdf";
        console.log(objectURL);
    
    
    
    
    console.log("hiii");
    //if document is not uploaded
    const input = document.getElementById('preapprovalUpload');
    const link = document.getElementById('downloadPreApproval');
    if ( input.files.length === 0 ){
        alert("You have not uploaded the file yet!");
        document.getElementById("downloadPreApproval").download = "";

    } else{
        console.log("why");

        const file = input.files[0];
        let objectURL = URL.createObjectURL(file);
        document.getElementById("downloadPreApproval").download = objectURL;
        document.getElementById("downloadPreApproval").href = objectURL;
        link.download = file.name;
    }
    */
    
