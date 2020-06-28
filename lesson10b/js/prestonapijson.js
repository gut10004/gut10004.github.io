const liveURL='https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=4221f5ae2af828109b1fbb5b1ed68248&units=imperial';

fetch(liveURL)
  .then((response) => response.json())
  .then((jsObject) => {
      console.log(jsObject);
      document.getElementById("currently").textContent= jsObject.list[0].weather[0].description;
      document.getElementById("temperature").textContent=jsObject.list[6].main.temp.toFixed(0);
      document.getElementById("humidity").textContent=jsObject.list[0].main.humidity;
      document.getElementById("windSpeed").textContent=jsObject.list[0].wind.speed;

    windChillCalc(jsObject.main.temp, jsObject.wind.speed);
});

function windChillCalc(temperature, windSpeed) {
    if(windSpeed > 3 && temperature <= 50) {
      let chill= 35.74 + 0.6215 * temperature - 35.75 * (Math.pow(windSpeed, 0.16)) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
      chill= chill.toFixed(0) + "&deg;F";
      document.getElementById("windChillOutput")[3].innerHTML= chill;
    }
  
    else{
      document.getElementById("windChillOutput")[3].innerHTML= "N/A"
    }
  
}






const forecastURL='https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=4221f5ae2af828109b1fbb5b1ed68248&units=imperial';

fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
    
        const fivedayforecast= jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));

        const weekdays= ["Sun", "Mon", "Tue", "Thu", "Fri", "Sat"];

        let day= 0;
        fivedayforecast.forEach(forecast => {
            let d= new Date(forecast.dt_txt);
                document.getElementById(`temp${day + 1}`).innerHTML= `${forecast.main.temp.toFixed(0)}&deg;F`;
                document.getElementById(`day${day + 1}`).textContent= weekdays[d.getDay()];
                
                const imagesrc= `https://openweathermap.org/img/wn/${forecast.weather[0].icon}`;
                const desc= forecast.weather[0].description;
                document.getElementById(`icon${day + 1}`).setAttribute('src', imagesrc);
                document.getElementById(`icon${day + 1}`).setAttribute('alt', desc);
            
            day++;
        });
});
