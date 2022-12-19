/*
Upload: POST /file/upload (params: file & type)
<form method="post" action="https://bilasmus.uc.r.appspot.com/file/upload" accept="application/pdf" enctype='multipart/form-data'>
                        <div class="files color form-group mb-3">
                            <input class="form-control" type="file" accept="application/pdf" multiple="" name="file" id="formFile" required>
                        </div>
                        <input class="btn btn-success" type="submit" id="downloadCourseTransfer" style="margin-left: 600px;" value="Upload">
                    </form>
                    <a href="" class="btn btn-success"  id="downloadPreApproval" onclick="downloadFileLink()" download style="margin-left: 590px; margin-top:10px">Download File</a>
*/

let tableHTML = document.getElementById("table");
fetch("https://bilasmus.uc.r.appspot.com/user/allOutgoingUsers/?s=" +  getCookie("sessionID"))
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

        document.getElementById("ID"+index).innerHTML = data.id;
        document.getElementById("name"+index).innerHTML = data.name;
        document.getElementById("email"+index).innerHTML = data.email;
        document.getElementById("university"+index).innerHTML = data.uni;

        index++;
        empty++;
    })
    if (empty==0){
        tableHTML.innerHTML = tableHTML.innerHTML + '<tr>'+ '<td colspan="12"> No Result !!!</td>'+'</tr>';
    }
}).catch(function(err) {
    console.log('Fetch Error :-S', err);
});

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