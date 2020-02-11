var today = new Date();
var day = today.getDay();

if (day==5) {
    disp = "block";
    document.getElementById("banner").style.display = disp;
}