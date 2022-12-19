/*
    Methods for Coordinator Transcripts Page
*/
let tableHTML = document.getElementById("table");
fetch("https://bilasmus.uc.r.appspot.com/file/t/all/all/?s=" +  getCookie("sessionID"))
.then((response) => {
    console.log("here");
    return response.json();
  }).then((data) => {
    let index = 0;
    let empty = 0;
    console.log("maybe here");
      $.each(data, (index, data) => {
        console.log(data);

        tableHTML.innerHTML = tableHTML.innerHTML + '<tr>'+
        '<td id="ID'+index+'">01</td>'+
        '<td id="name'+index+'">India</td>'+
        '<td id="email'+index+'">Souvik Kundu</td>'+
        '<td id="university'+index+'">Bootstrap Stuido</td>'+
        '<td><a class="btn btn-success" style="margin-left: 100px;" id="downloadTranscript'+index+'" type="select" onclick="downloadFileLink()">Select</a></td>'+
        '</tr>';
        
        document.getElementById("ID"+index).innerHTML = data.name;
        document.getElementById("name"+index).innerHTML = data.uploadDate;
        document.getElementById("email"+index).innerHTML = data.name;
        document.getElementById("university"+index).innerHTML = data.name;

        //document.getElementById("fileNamePreApproval").value = data.name;
        downloadTranscript.href = data.url;
        downloadTranscript.download = data.url;
        index++;
        empty++;
      })
      if (empty==0){
        tableHTML.innerHTML = tableHTML.innerHTML + '<tr>'+ '<td colspan="12"> No Result !!!</td>'+'</tr>';
      }
  }).catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
  




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