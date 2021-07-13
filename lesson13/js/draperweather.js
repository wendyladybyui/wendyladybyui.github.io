const cityID = '5774001';
const APIkey = '9ef369af604c9323872b79b1ec5c98e5';

const myAPI = `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&appid=${APIkey}&units=imperial`;

fetch(myAPI)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let day = 0;
    const daysofweek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const threeday = jsObject.list.filter( forecast => forecast.dt_txt.includes('18:00:00'));
        console.log(threeday);

    threeday.forEach( x => {
        let d = new Date(x.dt_txt);
        console.log(d);
        document.getElementById(`dayofWeek${day+1}`).textContent = daysofweek[d.getDay()];
        console.log(`X is: ${x.weather[0].icon}`);
        const imgsrc = `https://openweathermap.org/img/w/${x.weather[0].icon}.png`;
        const desc = x.weather[0].description;
        let image = document.createElement('img');
        let imageTD = document.getElementById(`icon${day+1}`);
        image.setAttribute('src', imgsrc);
        image.setAttribute('alt', desc);
        imageTD.appendChild(image);
        document.getElementById(`forecast${day+1}`).textContent = x.main.temp_max.toFixed(0);
        document.getElementById(`foredesc${day+1}`).textContent = x.weather[0].description.toUpperCase();
        day++
    });

});
