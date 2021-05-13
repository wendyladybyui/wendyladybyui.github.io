function hamburger() {
    const button = document.querySelector('.hamburger');
    const nav = document.querySelector('.headermenu')

        button.addEventListener('click', () => {nav.classList.toggle('responsive')}, false);


    window.onresize = () => {if (window.innerWidth > 760) nav.classList.remove('responsive')};
}

function fulldate() {
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
}

