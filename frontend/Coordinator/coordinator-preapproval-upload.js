/*
    Methods for Coordinator PreApproval File Upload Page
*/

/*document.getElementById("preapprovalUpload").onclick = function(){
    const input = document.getElementById('preapprovalUpload');
    const link = document.getElementById('downloadPreApproval');
    const file = input.files[0];
    let objectURL = URL.createObjectURL(file);
    document.getElementById("downloadPreApproval").download = objectURL;
    document.getElementById("downloadPreApproval").href = objectURL;
    console.log("inside first");
};*/
const input = document.getElementById('preapprovalUpload');
const link = document.getElementById('downloadPreApproval');
let objectURL;
 
    
    input.addEventListener('change', function () {
        if (objectURL) {
          // revoke the old object url to avoid using more memory than needed
          URL.revokeObjectURL(objectURL);  
        }
      
        const file = this.files[0];
        console.log(file);
        let blob = new Blob([file], {type: "octet/stream"}),
        objectURL = URL.createObjectURL(blob);
      
        link.download = file.name; // this name is used when the user downloads the file
        link.href = objectURL;
        console.log(objectURL);
      });
    
    /*
    
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
    
