/*let today = new Date();
let day= today.getDay();
var disp = day;

if (day == 5) {
    
}

document.getElementById("banner").style.display = disp;
*/


function showBanner() {
    let d=new Date();
    if (d.getDay()==5){
        document.getElementById("banner").style.display = disp;
    }
}