const requestURL = ".json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  
  .then(function (jsonObject) {
    console.table(jsonObject);  
      
  	}
});