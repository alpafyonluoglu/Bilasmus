function openLink() {
    //let objectURL
}

function calcPercentage() {
    let check1 = document.getElementById("formCheck-1").target().checked();
    let check2 = document.getElementById("formCheck-2").checked;
    let check3 = document.getElementById("formCheck-3").checked;
    let check4 = document.getElementById("formCheck-4").checked;
    let check5 = document.getElementById("formCheck-5").checked;
    console.log("change made");
    let percentage = (check1.valueAsNumber + check2.valueAsNumber + check3.valueAsNumber + check4.valueAsNumber + check5.valueAsNumber) * 20;
    document.getElementById("progress_bar").ariaValueNow = percentage.toString();
}