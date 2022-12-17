function openLink() {
    //let objectURL
}

function calcPercentage() {
    let check1 = document.getElementById("formCheck-1").checked;
    let check2 = document.getElementById("formCheck-2").checked;
    let check3 = document.getElementById("formCheck-3").checked;
    let check4 = document.getElementById("formCheck-4").checked;
    let check5 = document.getElementById("formCheck-5").checked;
    var percentage = (check1 + check2 + check3 + check4 + check5) * 20;
    document.getElementById("progress_bar").ariaValueNow = percentage.toString();
}