let dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

let d = new Date();
let dayName = dayNames[d.getDay()];
var disp = "none";

if (day == 2) {
    disp = "block";
}

document.getElementById("banner").style.display = dayName;