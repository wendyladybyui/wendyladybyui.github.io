const cityid = '5604473';
const APPID = 'adb8f0bfd2020a6e40c588f1e4e0812b';
const units = 'imperial';

const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityid}&units=imperial&appid=${APPID}&units=imperial`;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const temperature = document.querySelector('#current-temp');
    temperature.textContent = jsObject.main.temp.toFixed(0);
    const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    document.getElementById('imagesrc').textContent = imagesrc;
    document.getElementById('icon').setAttribute('src', imagesrc);
  });