const hambutton = document.querySelector('.hamburger');
const mainnav = document.querySelector('.headermenu')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);


window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

