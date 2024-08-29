document.addEventListener('DOMContentLoaded', () => {
    const hoverArea = document.querySelector('.photo-box');
    const audio = document.getElementById('hover-sound');

    hoverArea.addEventListener('mouseover', () => {
        audio.play();
    });

    hoverArea.addEventListener('mouseout', () => {
        audio.pause();
        audio.currentTime = 0; 
    });
});