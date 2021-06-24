const cityID = '5604473';
const AppID = '31aaf20b273a6018ac46f9ee393ae221';
const cnt = 5;

const apiURL2 = `https://api.openweathermap.org/data/2.5/forecast/daily?id={cityID}&cnt={cnt}&appid={AppID}&units=imperial`;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const forecast = jsonObject['stations'];

    for (let i = 0; i < forecast.length; i++ ) {

        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let high = document.createElement('p');
        let low = document.createElement('p');
        let desc = document.createElement('p');
        let img = document.createElement('img');

        h2.textContent = forecast[i].list[i].dt_txt;
        high.textContent = 'Hi' + forecast[i].main.temp_max.toFixed(0) + '* F';
        low.textContent = 'Lo' + forecast[i].main.temp_min.toFixed(0) + '* F';
        desc.textContent = forecast[i].weather[i].description.toUpperCase();
        img.src = `https://openweathermap.org/img/w/${jsObject.weather[i].icon}.png`;
        img.alt = desc[i];

    card.appendChild(h2).appendChild(high).appendChild(low).appendChild(desc).appendChild(img);

document.querySelector('div.cards').appendChild(card);
 

/*    const desc = document.querySelector('#desc');
    desc.textContent = jsObject.weather[i].description.toUpperCase();
    const high = document.querySelector('#high');
    high.textContent = jsObject.main.temp_max.toFixed(0);
    const low = document.querySelector('#low');
    low.textContent = jsObject.main.temp_min.toFixed(0);
    const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[i].icon}.png`;
    document.getElementById('imagesrc').textContent = imagesrc;
    const date = document.querySelector('#date');
    desc.textContent = jsObject.list[i].dt_txt;
*/
    }
});
