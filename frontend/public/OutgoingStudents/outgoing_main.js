let check1 = document.getElementById("formCheck-1");
let check2 = document.getElementById("formCheck-2");
let check3 = document.getElementById("formCheck-3");
let check4 = document.getElementById("formCheck-4");
let check5 = document.getElementById("formCheck-5");

check1.addEventListener('change', updateProgress);
check2.addEventListener('change', updateProgress);
check3.addEventListener('change', updateProgress);
check4.addEventListener('change', updateProgress);
check5.addEventListener('change', updateProgress);

function updateProgress() {
    let progress = 0;
    if(check1.checked) progress = progress + 1;
    if(check2.checked) progress = progress + 1;
    if(check3.checked) progress = progress + 1;
    if(check4.checked) progress = progress + 1;
    if(check5.checked) progress = progress + 1;
     progress = progress * 20;
    let updateBar = document.getElementById("progress_bar");
    console.log(progress.toString() + "%");
    updateBar.innerHTML = progress.toString() + "%";
    updateBar.style.width = progress.toString() + "%";
};