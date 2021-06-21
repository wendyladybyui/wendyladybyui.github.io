const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
  

  const towns = jsonObject['towns'];

    let soda = document.createElement('section');
    let h2 = document.createElement('h2');
    let motto = document.createElement('p');
    let yearFounded = document.createElement('p');
    let currentPopulation = document.createElement('p');
    let averageRainfall = document.createElement('p');
    

    h2.textContent = towns[0].name;
    motto.textContent = 'Motto: ' + towns[0].motto;
    yearFounded.textContent = 'Year Founded: ' + towns[0].yearFounded;
    currentPopulation.textContent = 'Population: ' + towns[0].currentPopulation;
    averageRainfall.textContent = 'Average Rainfall: ' + towns[0].averageRainfall;

    soda.appendChild(h2).appendChild(motto).appendChild(yearFounded).appendChild(currentPopulation).appendChild(averageRainfall);


document.querySelector('div.soda').appendChild(soda);
});    


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
  
    let fish = document.createElement('section');
    let h2 = document.createElement('h2');
    let motto = document.createElement('div');
    let yearFounded = document.createElement('div');
    let currentPopulation = document.createElement('div');
    let averageRainfall = document.createElement('div');
    
  const towns = jsonObject['towns'];

    h2.textContent = towns[2].name;
    motto.textContent = 'Motto: ' + towns[2].motto;
    yearFounded.textContent = 'Year Founded: ' + towns[2].yearFounded;
    currentPopulation.textContent = 'Population: ' + towns[2].currentPopulation;
    averageRainfall.textContent = 'Average Rainfall: ' + towns[2].averageRainfall;

    fish.appendChild(h2).appendChild(motto).appendChild(yearFounded).appendChild(currentPopulation).appendChild(averageRainfall);


document.querySelector('div.fish').appendChild(fish);
});    

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);

    let preston = document.createElement('section');
    let h2 = document.createElement('h2');
    let motto = document.createElement('p');
    let yearFounded = document.createElement('p');
    let currentPopulation = document.createElement('p');
    let averageRainfall = document.createElement('p');

  const towns = jsonObject['towns'];

    h2.textContent = towns[6].name;
    motto.textContent = 'Motto: ' + towns[6].motto;
    yearFounded.textContent = 'Year Founded: ' + towns[6].yearFounded;
    currentPopulation.textContent = 'Population: ' + towns[6].currentPopulation;
    averageRainfall.textContent = 'Average Rainfall: ' + towns[6].averageRainfall;
    
    preston.appendChild(h2).appendChild(motto).appendChild(yearFounded).appendChild(currentPopulation).appendChild(averageRainfall);


document.querySelector('div.preston').appendChild(preston);
  })
