// Toggle Product Details
function toggleProduct(button) {
  const details = button.nextElementSibling;
  if (details.style.maxHeight) {
    details.style.maxHeight = null;
    button.textContent = "Explore Product";
  } else {
    details.style.maxHeight = details.scrollHeight + "px";
    button.textContent = "Hide Details";
  }
}

// Filter Products
function showCategory(category, btn) {
  const products = document.querySelectorAll('.product');
  const buttons = document.querySelectorAll('.cat-btn');

  buttons.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  products.forEach(prod => {
    if(category === 'all') prod.style.display = 'block';
    else if(prod.classList.contains(category)) prod.style.display = 'block';
    else prod.style.display = 'none';
  });
}

// === Fullscreen Image Viewer ===
let currentImages = [];
let currentIndex = 0;

function openLightbox(images, index) {
  currentImages = images;
  currentIndex = index;
  document.getElementById('lightbox-img').src = currentImages[currentIndex];
  document.getElementById('lightbox').classList.add('open');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
}

function changeLightbox(step) {
  currentIndex = (currentIndex + step + currentImages.length) % currentImages.length;
  document.getElementById('lightbox-img').src = currentImages[currentIndex];
}

// Add click event to all product images
function enableImageClicks() {
  document.querySelectorAll('.slider').forEach(slider => {
    const imgs = Array.from(slider.querySelectorAll('img')).map(img => img.src);
    slider.querySelectorAll('img').forEach((img, index) => {
      img.addEventListener('click', () => openLightbox(imgs, index));
    });
  });
}

// Auto Slider
function startSliders() {
  document.querySelectorAll('.slider').forEach(slider => {
    const slides = slider.querySelectorAll('.slide');
    let current = 0;
    setInterval(() => {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, 3000);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  startSliders();
  enableImageClicks();
});
