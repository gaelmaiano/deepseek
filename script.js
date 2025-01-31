
let currentIndex = 0;

function showSlide(index) {
  const carouselInner = document.querySelector('.carousel-inner');
  const totalSlides = document.querySelectorAll('.carousel-item').length;

  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * 100;
  carouselInner.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// Auto-play (optionnel)
setInterval(nextSlide, 5000);
// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

// Ouvrir la lightbox
document.querySelectorAll('.gallery img').forEach(image => {
  image.addEventListener('click', () => {
    lightbox.style.display = 'block';
    lightboxImg.src = image.src;
  });
});

// Fermer la lightbox
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Fermer la lightbox en cliquant à l'extérieur de l'image
lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = 'none';
  }
});