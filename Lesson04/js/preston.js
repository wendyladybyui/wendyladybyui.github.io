document.addEventListener('DOMContentLoaded', function() {

    let button = document.querySelector('.hamburger');
    let nav = document.querySelector('.headermenu');

	button.addEventListener('click', () => {nav.classList.toggle('responsive')}, false);


    window.onresize = () => {if (window.innerWidth > 760) nav.classList.remove('responsive');
}})