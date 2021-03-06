const liveURL="https://api.openweathermap.org/data/2.5/weather?id=3530103&units=imperial&APPID=a5eb041f3d0e6ff0514a6d37280cd339&units=imperial";

fetch(liveURL)
  .then((response) => response.json())
  .then((jsObject) => {
      console.log(jsObject);
      document.getElementById("currently").textContent= jsObject.weather[0].description;
      document.getElementById("temperature").textContent=jsObject.main.temp;
      document.getElementById("humidity").textContent=jsObject.main.humidity;

});


const forecastURL="https://api.openweathermap.org/data/2.5/forecast?id=3530103&units=imperial&APPID=f83583a6ff92c0dc1b81953ae42984d6&units=imperial";

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
