/* Time on main page */
const data = new Date();
const boxTime = document.getElementById('time');
const months = ["January", "February", "March", "April", "May",
    "June", "July", "August", "September", "October", "November", "December"
];

boxTime.innerHTML = `${data.getDay()} ${months[data.getMonth()]} ${data.getFullYear()}`;