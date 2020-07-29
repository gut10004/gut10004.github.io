const requestURL = "https://gut10004.github.io/lesson12/js/rentals.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  
  .then(function (jsonObject) {
    console.table(jsonObject);  
      
  	}
});