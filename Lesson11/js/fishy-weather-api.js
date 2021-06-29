const lastfish = '42.0368759';
const longestfish = '-111.3963177';
const fishCode = '65e5eb7f3fc9c372d8909af1058ed3a8';

const fhweaURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lastfish}&lon=${longestfish}&appid=${fishCode}&units=imperial`;

fetch(fhweaURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const current = document.querySelector('#current-temp');
    current.textContent = jsObject.weather[0].description.toUpperCase();
    const high = document.querySelector('#high');
    high.textContent = jsObject.main.temp_max.toFixed(0);
    const humidity = document.querySelector('#humidity');
    humidity.textContent = jsObject.main.humidity;
    const windspeed = document.querySelector('#wind-speed');
    windspeed.textContent = jsObject.wind.speed.toFixed(0);
    const windchill = document.querySelector('#windchill');
    const temp = jsObject.main.temp.toFixed(0);
    const wspeed = jsObject.wind.speed.toFixed(0);
    windchill.textContent = ((35.74) + (0.6215 * temp)) - (35.75 * Math.pow(wspeed, 0.16)) + (0.4275 * temp * Math.pow(wspeed, 0.16));
  });

  