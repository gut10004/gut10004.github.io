var options= {
    weekday:"long",
    day:"numeric",
    month:"long",
    year:"numeric"
}
document.getElementById('outputDiv').innerHTML= new Date(document.lastModified).toLocaleDateString("en-US",options);
document.getElementById('date').innerHTML= new Date(document.lastModified).getFullYear();