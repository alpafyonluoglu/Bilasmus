/*
    Methods for Coordinator Transcripts Page
*/
let studentName;
let date;

document.getElementById("table").innerHTML= '<tr>'+
'<td>01</td>'+
'<td>India</td>'+
'<td>Souvik Kundu</td>'+
'<td>Bootstrap Stuido</td>'+
'<td><button class="btn btn-success" style="margin-left: 100px;" id="downloadTranscript" type="submit" onclick="downloadFileLink()">Select</button></td>'+
'</tr>';

document.getElementById("table").innerHTML ='<tr>'+
'<td colspan="12"> No Result !!!</td>'+
'</tr>';

//document.getElementById("studentName").innerHTML = studentName;
//document.getElementById("fileDate").innerHTML = date;

/*
document.getElementById("downloadTranscript").onclick = function(){
    //get file from database and 
    let link = document.getElementById("downloadTranscript");
    //link.href = downloadableLInk;
};
*/
