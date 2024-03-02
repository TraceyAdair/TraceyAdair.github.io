console.log("Hello World!");

var workInfo = document.getElementById("workInfo");

console.log(workInfo)


workInfo.addEventListener('mouseover', banana);
workInfo.addEventListener('mouseout', orange);


function banana() {
    alert("Call me at 435.255.0976")
    //workInfo.innerHTML = "You're awsome!";
}

function orange() {
    workInfo.innerHTML = "Details";
}

var contact = document.getElementById("contact-Info")

contact.addEventListener('popupcontainer');

function lemon () {
    alert ("435.255.0976")
}