const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button-right');
const prevButton = document.querySelector('.carousel-button-left');

function positionSlides() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    slides.forEach((slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    });
}

positionSlides();
window.addEventListener('resize', positionSlides);
window.addEventListener('load', positionSlides);

nextButton.addEventListener('click', e => {
    const curr = track.querySelector('.currentSlide');
    const next = curr.nextElementSibling;
    if (!next) return;
    positionSlides();
    track.style.transform = 'translateX(-' + next.style.left + ')';
    curr.classList.remove('currentSlide');
    next.classList.add('currentSlide');
});

prevButton.addEventListener('click', e => {
    const curr = track.querySelector('.currentSlide');
    const prev = curr.previousElementSibling;
    if (!prev) return;
    positionSlides();
    track.style.transform = 'translateX(-' + prev.style.left + ')';
    curr.classList.remove('currentSlide');
    prev.classList.add('currentSlide');
});