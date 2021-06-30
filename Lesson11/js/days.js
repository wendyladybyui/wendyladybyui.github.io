document.addEventListener('DOMContentLoaded', function() {
    
    let lastVisit = localStorage.getItem('date');
    if (!lastVisit) {
        localStorage.setItem('date', Date.now());
        output = "Looks like this is your first visit! Feel free to look around!";
    } else {
        const daysSinceLastVisit = Math.round(Math.abs((parseInt(lastVisit) - Date.now()) / (1000 * 3600 * 24)));
        localStorage.setItem('date', Date.now());
        if (daysSinceLastVisit == 1) {
            output = `Welcome Back! You must really like our site, it's only been ${daysSinceLastVisit} day since your last visit!`;
        } else {
            output = `It's good to see you again! It has been ${daysSinceLastVisit} days since your last visit!`
        }
    

    document.getElementById('lastvisit').textContent = output;
    }
});