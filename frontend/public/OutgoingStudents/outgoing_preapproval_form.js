let uploadFileButton = document.getElementById("upload_file");
let uploadArea = document.getElementById("upload");
uploadFileButton.addEventListener('click', uploadFile)



function uploadFile() {
    //Upload: POST /file/upload (params: file)
    //https://bilasmus.uc.r.appspot.com/file/upload
    /*
        Document types:
        - cr: Course request
        - la: Learning agreement
        - lp: Language proficiency
        - pa: Pre approval
        - t: Transcript
     */
    uploadArea.getFile();
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