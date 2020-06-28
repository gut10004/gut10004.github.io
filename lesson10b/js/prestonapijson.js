const currentURL='https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=4221f5ae2af828109b1fbb5b1ed68248&units=imperial';
const forecastURL='https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=4221f5ae2af828109b1fbb5b1ed68248&units=imperial';


fetch(currentURL)
  .then((response) => response.json())
  .then((jsObject) => {
    let currentConditions = document.getElementsByClassName('right')[0];
    let currentTemp = document.getElementsByClassName('right')[1];
    let high = document.getElementsByClassName('right')[2];
    let humidity = document.getElementsByClassName('right')[4];
    let wind = document.getElementsByClassName('right')[5];

  	currentConditions.textContent = jsObject.weather[0].description;
  	currentTemp.textContent = parseInt(jsObject.main.temp) + "°F";
  	high.textContent = parseInt(jsObject.main.temp_max) + "°F";
  	humidity.textContent = parseInt(jsObject.main.humidity)+"%";
  	wind.textContent = parseInt(jsObject.wind.speed) +" mph";
    windChill(jsObject.main.temp, jsObject.wind.speed);
});

fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        let dayCount = 0;
        let entryCount = 0;
        while( entryCount<jsObject.list.length && dayCount<5){
            if(jsObject.list[entryCount].dt_txt.split(" ")[1] == "18:00:00"){
                const year = parseInt(jsObject.list[entryCount].dt_txt.split(" ")[0].split("-")[0]);
                const month = parseInt(jsObject.list[entryCount].dt_txt.split(" ")[0].split("-")[1])-1;
                const day = parseInt(jsObject.list[entryCount].dt_txt.split(" ")[0].split("-")[2]);
                const hour = parseInt(jsObject.list[entryCount].dt_txt.split(" ")[1].split(":")[0]);
                const min = parseInt(jsObject.list[entryCount].dt_txt.split(" ")[1].split(":")[1]);
                const sec = parseInt(jsObject.list[entryCount].dt_txt.split(" ")[1].split(":")[2]);
                
                let date = new Date(year, month, day, hour, min, sec);
                let dayNum = date.getDay();
                let dayStr = dayToStr(dayNum); 

                const imagesrc = 'https://openweathermap.org/img/wn/' + jsObject.list[entryCount].weather[0].icon + '.png';
                const imagealt = jsObject.list[entryCount].weather[0].main;

                const temp = parseInt(jsObject.list[entryCount].main.temp)+ "°F";

                const week = document.getElementsByClassName("day")[dayCount];
                const icon= document.getElementsByClassName("icon")[dayCount];
                const weekTemp = document.getElementsByClassName("fiveDay")[dayCount];
                
                const icon = document.createElement("img");

                week.textContent = dayStr;
                
                icon.src = imagesrc;
                icon.alt = imagealt;
                
                icon.appendChild(icon);
                    weekTemp.textContent = temp;
                    dayCount++;

                }
            }
            
            entryCount++;
        }
});

function dayToStr(num){
  	switch(num){
  		case 0:
  			return "Sun"
  		case 1:
  			return "Mon"
  		case 2:
  			return "Tue"
  		case 3:
  			return "Wed"
  		case 4: 
  			return "Thur"
  		case 5:
  			return "Fri"
  		case 6:
  			return "Sat"
  	}
}

function windChill(temp, wind){
  if(wind > 3 && temp <= 50){
    let windChill = 35.74 + 0.6215*temp - 35.75*(Math.pow(wind, 0.16))+ 0.4275*temp*Math.pow(wind, 0.16);
    windChill = windChill.toFixed(0)+"&deg;F";
    document.getElementsByClassName("right")[3].innerHTML = windChill;
  }else{
    document.getElementsByClassName("right")[3].innerHTML = "N/A"
  }
}