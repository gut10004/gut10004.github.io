const futureURL= 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=4221f5ae2af828109b1fbb5b1ed68248';

fetch(futureURL)
.then((response) => response.json())
  .then((jsObject) => {
      console.log(jsObject);

        const fivedayforecast= jsObject.list.filter(x => x.dt_txt.includes("12:00:00"));

        console.log(fivedayforecast);

        const weekdays= ['Sun', 'Mon', 'Tue', 'Thu', 'Fri', 'Sat'];

        let day= 0;
        fivedayforecast.forEach(forecast => {
            let d= new Date(forecast.dt_txt);
            document.getElementById(`forecast${day+1}`).textContent= forecast.main.temp;
            document.getElementById(`dayofweek${day+1}`).textContent= weekdays[d.getDay()];
            day++;
        });
});

