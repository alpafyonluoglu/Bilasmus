/*
    Methods for the Coordinator home page
*/

//Populate Course Request Table
var table = document.getElementById("courseRequestTable");
if ( true ){
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = "Empty";
   // <tr class="warning no-result">
   // <td colspan="12"><i class="fa fa-warning"></i>&nbsp; No Result !!!</td>
   // </tr>
} else {
    //items must be the json value
    items.forEach( item => {
       
            let row = table.insertRow();
            let date = row.insertCell(0);
            name.innerHTML = item.studentName;
            let name = row.insertCell(1);
        if ( fileUploaded ){
            file.innerHTML = "Uploaded";
        } else {
            file.innerHTML = "Not uploaded";
        }
      });
}
