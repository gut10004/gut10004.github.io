let temperature = parseFloat(document.getElementById("temperature").textContent);
let windSpeed = parseFloat(document.getElementById("windSpeed").textContent);

let windChill = windChillCalc(temperature, windSpeed);

document.getElementById("windChillOutput").textContent = windChill;


function windChillCalc(temperature, windSpeed) {

    if (temperature <= 50 && windSpeed >= 3) {
        let chill= 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        return Math.round(chill * 10) / 10;
    } 
    
    else {
        return "N/A";
    }

}

