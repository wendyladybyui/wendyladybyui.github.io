document.addEventListener('DOMContentLoaded', function getDate() {
    const daysofweek = [
        "Sunday",
         "Monday",
         "Tuesday",
        "Wednesday",
	    "Thursday",
	    "Friday",
	    "Saturday"
];
    const months = [
    	"January",
    	"February",
     	"March",
	    "April",
	    "May",
	    "June",
	    "July",
	    "August",
	    "September",
	    "October",
	    "November",
	    "December"
];
const d = new Date();
const day = daysofweek[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
let fulldate = `${day}, ${d.getDate()} ${monthName} ${year}`;
document.getElementById("currentdate").textContent = fulldate;
document.getElementById("NewYear").textContent = year;
});

