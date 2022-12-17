
function updateProgress() {
    let check1 = document.getElementById("formCheck-1").checkOn;
    let check2 = document.getElementById("formCheck-2").checkOn;
    let check3 = document.getElementById("formCheck-3").checkOn;
    let check4 = document.getElementById("formCheck-4").checkOn;
    let check5 = document.getElementById("formCheck-5").checkOn;
    console.log("function works");
    let progress = (check1.valueAsNumber + check2.valueAsNumber + check3.valueAsNumber + check4.valueAsNumber + check5.valueAsNumber) * 20;
    let updateBar = document.getElementById("progress_bar").innerHTML;
    updateBar.style = "width: " + progress.toString() + "%;";
    updateBar = progress.toString() + "%";
}