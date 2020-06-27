const apiURL= "https://api.openweather.org/data/2.5/weather?id=5604473&APPID=4221f5ae2af828109b1fbb5b1ed68248&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);





    
});