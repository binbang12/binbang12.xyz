let currentSlideIndex = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showNextSlide() {
    const currentSlide = slides[currentSlideIndex];
    currentSlide.classList.remove('active');
    currentSlide.classList.add('inactive');

    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;

    const nextSlide = slides[currentSlideIndex];
    nextSlide.classList.add('active');
    nextSlide.classList.remove('inactive');
}

slides[currentSlideIndex].classList.add('active');

setInterval(showNextSlide, 6000);