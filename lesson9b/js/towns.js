const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
  	const towns = jsonObject["towns"];
  	for (let i=0; i<towns.length; i++){
  		if( towns[i].name == "Fish Haven"|| towns[i].name == "Preston" || towns[i].name == "Soda Springs"){
  			buildTownSection(towns[i]);
  		}
  	}
  });

function buildTownSection(townData){
	let townsDiv = document.getElementsByClassName("towns")[0];
	let newTown = document.createElement("div");
	let data = document.createElement("div");
	let image = document.createElement("div");
	let townName = document.createElement("h3");
	let townMotto = document.createElement("h4");
	let yearFounded = document.createElement("p");
	let population = document.createElement("p");
	let rainFall = document.createElement("p");
	let img = document.createElement("img");

	townName.textContent = townData.name;
	townMotto.textContent = townData.motto;
	yearFounded.textContent = "Year Founded: " + townData.yearFounded;
	population.textContent = "Population: " + townData.currentPopulation;
    rainFall.textContent = "Annual Rainfall: " + townData.averageRainfall;
    
	img.setAttribute("src", "images/" + townData.photo);
	img.setAttribute("alt", townData.name);

	data.appendChild(townName);
	data.appendChild(townMotto);
	data.appendChild(yearFounded);
	data.appendChild(population);
    data.appendChild(rainFall);
    
	newTown.appendChild(data);
	image.appendChild(img);
	newTown.appendChild(image);

    townsDiv.appendChild(newTown);
}