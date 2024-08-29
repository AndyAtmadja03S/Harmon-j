const photoBox = document.querySelector('.photo-box');
const images = photoBox.querySelectorAll('img');

let currentImageIndex = 0;
let interval;

function nextImage() {
    images.forEach((img, index) => {
        img.style.opacity = index === currentImageIndex ? '1' : '0';
    });
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

photoBox.addEventListener('mouseover', () => {
    nextImage();
    interval = setInterval(nextImage, 2500); 
});

photoBox.addEventListener('mouseout', () => {
    clearInterval(interval);
    images.forEach(img => img.style.opacity = '0'); 
    images[0].style.opacity = '1'; 
    currentImageIndex = 0;
});
