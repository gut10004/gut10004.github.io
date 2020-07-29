const rentalsURL = "https://gut10004.github.io/lesson12/js/rentals.json";

fetch(rentalsURL)
  .then((response) => response.json())
  .then((jsObject) => {
      console.log(jsObject);
      document.getElementById("metro").textContent= jsObject.main[4];
      document.getElementById("dio").textContent=jsObject.main[5];
      document.getElementById("pcx").textContent=jsObject.main[6];
      document.getElementById("atv").textContent=jsObject.main[7];
      document.getElementById("fourdoor").textContent=jsObject.main[8];
      document.getElementById("twodoor").textContent=jsObject.main[9];
      
});