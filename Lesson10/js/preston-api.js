const cityid = '5604473';
const APPID = 'adb8f0bfd2020a6e40c588f1e4e0812b';
const units = 'imperial';

const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityid}&units=imperial&appid=${APPID}&units=imperial`;

fetch(apiURL)
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
    windchill.textContent = ((35.74) + (0.6215 * temp)) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temp * Math.pow(windspeed, 0.16));
  });

  /*const cityid = '5604473';
const APPID = 'adb8f0bfd2020a6e40c588f1e4e0812b';
const units = 'imperial';

const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityid}&units=imperial&appid=${APPID}&units=imperial`;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);


    
  
    const current = document.querySelector('#current-temp');
    current.textContent = jsObject.weather[0].description;
    
    const high = document.querySelector('#high');
    high.textContent = jsObject.main.temp;
    
    const humidity = document.querySelector('#humidity');
    humidity.textContent = jsObject.main.humidity;

    const windspeed = document.querySelector('#wind-speed');
    windspeed.textContent = jsObject.wind.speed;




const temperature = document.querySelector('#current-temp');
temperature.textContent = jsObject.main.temp.toFixed(0);
const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
document.getElementById('imagesrc').textContent = imagesrc;
document.getElementById('icon').setAttribute('src', imagesrc);
document.getElementById('icon').setAttribute('alt', description); 
});

let temp = temperature;
let windspeed = document.querySelector('#wind-speed');
windspeed.textContent = jsObject.wind.speed;

let windchill = parseInt((35.74) + (0.6215 * temp)) -

(35.75 * Math.pow(windspeed, 0.16)) + 
(0.4275 * temp * Math.pow(windspeed, 0.16));

document.getElementById("windchill").textContent = windchill;
;*/
