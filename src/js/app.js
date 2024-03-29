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
window.addEventListener('load', () => {
    document.querySelector('.disable-js').classList.remove('disable-js');
});

/* Slider */
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const imageBox = document.querySelector('.image-box_active');
const bigImage = [...document.querySelectorAll('.image-box')];
const miniatureImages = [...document.querySelectorAll('.miniature-img')];
const listImageArea = document.querySelector('.slider-miniatures_img');

let numberImages = '3';

// Selection of pictures through arrow buttons
function changeRight() {
    if (miniatureImages.length === numberImages) {
        console.log('No more images ');
    } else {
        let selectedImage = document.querySelector('.miniature-img_active');
        selectedImage.parentElement.nextElementSibling.children[0].classList.add('miniature-img_active');
        selectedImage.classList.remove('miniature-img_active');
        selectedImage = listImageArea.querySelector('.miniature-img_active');
        changeBigImage(selectedImage);

        prevButton.style.cursor = 'pointer';
        numberImages++;

        if (miniatureImages.length === numberImages) {
            nextButton.style.cursor = 'not-allowed';
        }
    }
};

function changeLeft() {

    if (numberImages === 1) {
        console.log('No more images ');
    } else {
        let selectedImage = document.querySelector('.miniature-img_active');
        selectedImage.parentElement.previousElementSibling.children[0].classList.add('miniature-img_active');
        selectedImage.classList.remove('miniature-img_active');
        selectedImage = listImageArea.querySelector('.miniature-img_active');
        changeBigImage(selectedImage);

        nextButton.style.cursor = 'pointer';
        numberImages--;

        if (numberImages === 1) {
            prevButton.style.cursor = 'not-allowed';
        }
    }
};

nextButton.addEventListener('click', changeRight);
prevButton.addEventListener('click', changeLeft);

// Selection of pictures through miniatures
function changeCurrentImage() {
    numberImages = this.dataset.number_miniature;

    miniatureImages.forEach(image => {
        image.classList.remove('miniature-img_active');
    });
    this.classList.add('miniature-img_active');

    if (this === miniatureImages[miniatureImages.length - 1]) {
        numberImages = miniatureImages.length;
        nextButton.style.cursor = 'not-allowed';
        prevButton.style.cursor = 'pointer';
    } else if (this === miniatureImages[0]) {
        numberImages = 1;
        prevButton.style.cursor = 'not-allowed';
        nextButton.style.cursor = 'pointer';
    } else {
        prevButton.style.cursor = 'pointer';
        nextButton.style.cursor = 'pointer';
    }
};

miniatureImages.forEach(image => {
    image.addEventListener('click', changeCurrentImage);
});

// Select big image
function changeBigImage(image) {
    bigImage.forEach(photo => {
        photo.classList.remove('image-box_active');
        if (photo.dataset.big_image === image.dataset.number_miniature) {
            photo.classList.add('image-box_active');
        }
    });
};

miniatureImages.forEach(image => {
    image.addEventListener('click', () => changeBigImage(image));
})