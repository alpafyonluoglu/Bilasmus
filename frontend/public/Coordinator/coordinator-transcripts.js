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
'</tr>' +  '<tr>'+
'<td>01</td>'+
'<td>India</td>'+
'<td>Souvik Kundu</td>'+
'<td>Bootstrap Stuido</td>'+
'<td><button class="btn btn-success" style="margin-left: 100px;" id="downloadTranscript" type="submit" onclick="downloadFileLink()">Select</button></td>'+
'</tr>';


if (false){
    
document.getElementById("table").innerHTML ='<tr>'+
'<td colspan="12"> No Result !!!</td>'+
'</tr>';

} else{
    document.getElementById("table").innerHTML= '<tr>'+
'<td>01</td>'+
'<td>India</td>'+
'<td>Souvik Kundu</td>'+
'<td>Bootstrap Stuido</td>'+
'<td><button class="btn btn-success" style="margin-left: 100px;" id="downloadTranscript" type="submit" onclick="downloadFileLink()">Select</button></td>'+
'</tr>' +  '<tr>'+
'<td>01</td>'+
'<td>India</td>'+
'<td>Souvik Kundu</td>'+
'<td>Bootstrap Stuido</td>'+
'<td><button class="btn btn-success" style="margin-left: 100px;" id="downloadTranscript" type="submit" onclick="downloadFileLink()">Select</button></td>'+
'</tr>';
}
//document.getElementById("studentName").innerHTML = studentName;
//document.getElementById("fileDate").innerHTML = date;

/*
document.getElementById("downloadTranscript").onclick = function(){
    //get file from database and 
    let link = document.getElementById("downloadTranscript");
    //link.href = downloadableLInk;
};
*/


// Taken from W3Schools
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }