const cityid = '5774001';
const APPID = '6db2cd0657dd90ff07300acc6ef13101';
const units = 'imperial';

const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityid}&units=imperial&appid=${APPID}&units=imperial`;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const temp = document.querySelector('#current-temp');
    temp.textContent = jsObject.main.temp.toFixed(0);
    const humidity = document.querySelector('#humidity');
    humidity.textContent = jsObject.main.humidity;
    const condition = document.querySelector('#description')
    condition.textContent = jsObject.weather[0].description.toUpperCase();

  });

  