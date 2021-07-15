const myLAT = '40.5247';
const myLONG = '-111.8638';
const APIkey = '9ef369af604c9323872b79b1ec5c98e5';

const myAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=${myLAT}&lon=${myLONG}&exclude=minutely,hourly&appid=${APIkey}&units=imperial`;

fetch(myAPI)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let day = 0;
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const threeday = jsObject.daily;
        console.log(threeday);

    threeday.forEach( x => {
        let d = new Date((jsObject.daily[day+1].dt)*1000);
        let dayplus = day + 1;
        let dayofweek= d.getDay();
        console.log(d);
        document.getElementById(`dayofWeek${dayplus}`).textContent = weekday[dayofweek];
        console.log(`X is: ${jsObject.daily[dayplus].weather[0].icon}`);
        const imgsrc = `https://openweathermap.org/img/w/${jsObject.daily[dayplus].weather[0].icon}.png`;
        const desc = jsObject.daily[dayplus].weather[0].description;
        let image = document.createElement('img');
        let imageTD = document.getElementById(`icon${day+1}`);
        let daily = jsObject.daily[dayplus].temp.max.toFixed(0);
        let description = jsObject.daily[dayplus].weather[0].description.toUpperCase()
        image.setAttribute('src', imgsrc);
        image.setAttribute('alt', desc);
        imageTD.appendChild(image);
        document.getElementById(`forecast${day+1}`).textContent = daily;
        document.getElementById(`foredesc${day+1}`).textContent = description;
        day++
    })

  });
