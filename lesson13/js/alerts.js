const MYlat = '40.5247';
const MYlong = '-111.8638';
const myAPPID = '6e8f62e654465c0cd74e94f2aee327ab';

const ALERTapi = `https://api.openweathermap.org/data/2.5/onecall?lat=${MYlat}&long=${MYlong}&exclude=current,minutely,hourly,daily&appid=${myAPPID}`
fetch(ALERTapi)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const alerts = document.querySelector('.weather-alerts');
    alerts.textContent = jsObject.alerts.description;
  });

  