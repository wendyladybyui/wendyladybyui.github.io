document.addEventListener('DOMContentLoaded', function() {

        let day = newDate();
        let dayOptions = {
            weekday: 'long',
            year: 'numeric',
            day: 'numeric',
            month: long
        };

        let today = getDate.toLocaleDateString('en-us', dayOptions);

        if (today = 'Friday') {
           pancake();
        }
});

function pancake() {
    document.getElementsByClassName('pancake')[0].classList.remove('hide');
}