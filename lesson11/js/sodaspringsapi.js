const liveURL="https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=a5eb041f3d0e6ff0514a6d37280cd339&units=imperial";

fetch(liveURL)
  .then((response) => response.json())
  .then((jsObject) => {
      console.log(jsObject);
      document.getElementById("currently").textContent= jsObject.weather[0].description;
      document.getElementById("temperature").textContent=jsObject.main.temp;
      document.getElementById("humidity").textContent=jsObject.main.humidity;
      document.getElementById("windSpeed").textContent=jsObject.wind.speed;

      let temperature = parseFloat(document.getElementById("temperature").textContent);
      let windSpeed = parseFloat(document.getElementById("windSpeed").textContent);

      let windChill = windChillCalc(temperature, windSpeed);

      document.getElementById("windChillOutput").textContent = windChill;

      function windChillCalc(temperature, windSpeed) {
          if(windSpeed > 3 && temperature <= 50) {
            let chill= 35.74 + 0.6215 * temperature - 35.75 * (Math.pow(windSpeed, 0.16)) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
            chill= chill.toFixed(0) + "&deg;F";
            document.getElementById("windChillOutput").innerHTML= chill;
          }
        
          else{
            return "N/A";
          }
      }
});



const forecastURL="https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=f83583a6ff92c0dc1b81953ae42984d6&units=imperial";

fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
    
        const fivedayforecast= jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));

        const weekdays= ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        let day= 0;
        fivedayforecast.forEach(forecast => {
            let d= new Date(forecast.dt_txt);
                document.getElementById(`day${day + 1}`).textContent= weekdays[d.getDay()];
                document.getElementById(`temperature${day + 1}`).textContent= forecast.main.temp;
                

                const imagesrc= `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
                const desc= forecast.weather[0].description;
                document.getElementById(`icon${day + 1}`).setAttribute("src", imagesrc);
                document.getElementById(`icon${day + 1}`).setAttribute("alt", desc);
            
            day++;
        });
});



const sodaspringseventsapiURL="https://byui-cit230.github.io/weather/data/towndata.json";

fetch(sodaspringseventsapiURL)
.then((response) => response.json())
.then((jsObject) => {
    document.getElementById("event0").textContent=jsObject.towns[5].events[0];
    document.getElementById("event1").textContent=jsObject.towns[5].events[1];
    document.getElementById("event2").textContent=jsObject.towns[5].events[2];
});