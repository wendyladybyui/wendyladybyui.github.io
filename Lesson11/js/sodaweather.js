const latitude = '42.6544';
const longitude = '-111.6047';
const keyCode = '3de438f3dc84a856a2c2f37385d47359';

const ssweaURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${keyCode}&units=imperial`;

fetch(ssweaURL)
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

  