document.addEventListener('DOMContentLoaded', function() {
        let temp = getElementbyId('high');
        let windspeed = getElementbyID('wind-speed');

        windchill = parseInt((35.74 + (0.6215 * temp)) -
                 (35.75 * Math.pow(windspeed, 0.16)) + 
                 (0.4275 * temp * Math.pow(windspeed, 0.16)));

document.getElementById("windchill").textContent = windchill;
})