var today = new Date();
var day = today.getDay();
var disp = "none";

if (day == 2) {
    disp = "block";
}

document.getElementById("banner").style.display = disp;