/* Time on main page */
const data = new Date();
const boxTime = document.getElementById('time');
const day = data.getDay() < 10 ? 0 : '';
const months = ["January", "February", "March", "April", "May",
    "June", "July", "August", "September", "October", "November", "December"
];

boxTime.innerHTML = `${day}${data.getDay()} ${months[data.getMonth()]} ${data.getFullYear()}`;


/* Hamburger menu */

//Disable menu after click on <a>
document.querySelector('.toggle-menu a').addEventListener('click', () => {
    document.querySelector('.toggle').classList.toggle('toggle-active');
    document.querySelector('.navicon').classList.toggle('navicon-active');
});

//Active/disable hamburger menu
document.querySelector('.navicon').addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('.navicon').classList.toggle('navicon-active');

    document.querySelector('.toggle').classList.toggle('toggle-active');
});

/* Disable auto slider */
// window.addEventListener('load', () => {
//     document.querySelector('.disable-js').classList.remove('disable-js');
// });