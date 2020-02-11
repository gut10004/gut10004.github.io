var today = new Date();
var day = today.getDay();

if (day==4) {
    disp = "block";
    document.getElementById("banner").style.display = disp;
}