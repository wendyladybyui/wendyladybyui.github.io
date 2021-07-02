document.addEventListener('DOMContentLoaded', function() {

        const day = new Date();
        let dayOptions = {
            weekday: 'long',
            year: 'numeric',
            day: 'numeric',
            month: 'long'
        };

        let today = day.toLocaleDateString('en-us', dayOptions);

        if (today = 'Friday') {
           pancake();
        }
});

function pancake() {
    document.getElementsByClassName('pancake')[0].classList.remove('hide');
}