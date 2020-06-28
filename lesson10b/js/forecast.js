const currentURL= 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=4221f5ae2af828109b1fbb5b1ed68248&units=imperial';
const forecastURL= 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=4221f5ae2af828109b1fbb5b1ed68248&units=imperial';


fetch(currentURL)
.then((response) => response.json())
  .then((jsObject) => {
      console.table(jsObject);
    });

    const fivedayforecast= jsObject.list.filter(x=>x.dt_txt.includes("12:00:00"));

    console.log(fivedayforecast);
    
