// Automatically gather images and alt from the DOM for the carousel
const albumThumbs = document.querySelectorAll('.album-thumb img');
const albums = Array.from(albumThumbs).map(img => ({
  src: img.src,
  alt: img.alt
}));

const modal = document.getElementById('albumCarouselModal');
const carouselImg = document.getElementById('carouselImg');
let currentIndex = 0;

// Open carousel when image clicked
document.querySelectorAll('.album-item').forEach(function(item, idx){
  item.addEventListener('click', function(){
    openCarousel(idx);
  });
});

function openCarousel(idx) {
  currentIndex = idx;
  updateCarousel();
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeCarousel() {
  modal.style.display = 'none';
  document.body.style.overflow = '';
}

function updateCarousel() {
  carouselImg.src = albums[currentIndex].src;
  carouselImg.alt = albums[currentIndex].alt;
}

document.querySelector('.carousel-close').onclick = closeCarousel;
document.querySelector('.carousel-overlay').onclick = closeCarousel;
document.querySelector('.carousel-next').onclick = function() {
  currentIndex = (currentIndex + 1) % albums.length;
  updateCarousel();
};
document.querySelector('.carousel-prev').onclick = function() {
  currentIndex = (currentIndex - 1 + albums.length) % albums.length;
  updateCarousel();
};
document.addEventListener('keydown', function(e) {
  if(modal.style.display === 'flex') {
    if(e.key === 'Escape') closeCarousel();
    if(e.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % albums.length;
      updateCarousel();
    }
    if(e.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + albums.length) % albums.length;
      updateCarousel();
    }
  }
});

// Prevent right-click on all images
document.querySelectorAll('img').forEach(function(img) {
  img.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });
});