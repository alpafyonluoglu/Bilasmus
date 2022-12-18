document.getElementById("sendLinkButton").onclick = function () {
    let inputEmail = document.getElementById("inputEmail").value;
    console.log(inputEmail);

    fetch("https://bilasmus.uc.r.appspot.com/auth/reset", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "email": inputEmail,
        }),
    }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        if (data.completed === true){
            alert("A link was sent to the email if it exists in the system.");
        }else{
            alert(data.message);
        }
    }).catch(function(err) {
        console.log('Fetch Error :-S', err);
    });
}