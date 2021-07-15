const lat = '40.5247';
const lon = '-111.8638';
const APPIDkey = '6db2cd0657dd90ff07300acc6ef13101';


const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alert&appid=${APPIDkey}&units=imperial`;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

        const temp = document.querySelector('#current-temp');
        temp.textContent = jsObject.current.temp.toFixed(0);
        const humidity = document.querySelector('#humidity');
        humidity.textContent = jsObject.current.humidity;
        const condition = document.querySelector('#description')
        condition.textContent = jsObject.current.weather[0].description.toUpperCase();
    });