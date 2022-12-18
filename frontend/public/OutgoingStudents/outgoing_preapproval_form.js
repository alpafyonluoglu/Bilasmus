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