function showBanner() {
    var date= new Date();
    console.log(date.getDay());
    if(date.getDay()==4) {
        document.getElementById("banner").style.display= disp;
    } 
}