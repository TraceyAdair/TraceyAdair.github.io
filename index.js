console.log("Hello World!");

var workInfo = document.getElementById("workInfo");
var contact = document.getElementById("contact")



console.log(workInfo)

workInfo.addEventListener('mouseover', banana);
workInfo.addEventListener('mouseout', orange);
contact.addEventListener('mouseover', banana)

function banana() {
    //alert("You called?")
    //workInfo.innerHTML = "You're awsome!";
    contact.innerHTML  = "Call or Text 435.255.0976"
}

function orange() {
    workInfo.innerHTML = "Details";
}

var contact = document.getElementById("contact-Info")

contact.addEventListener('popupcontainer');

function lemon () {
    alert ("435.255.0976")
}