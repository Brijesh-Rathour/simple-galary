// Lightbox effect
const images = document.querySelectorAll('.gallery img');
images.forEach(image => {
  image.addEventListener('click', () => {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    const largeImage = document.createElement('img');
    largeImage.src = image.src;
    lightbox.appendChild(largeImage);
    document.body.appendChild(lightbox);

    lightbox.addEventListener('click', () => {
      document.body.removeChild(lightbox);
    });
  });
});

// Slideshow effect
let currentImageIndex = 0;
const slideshowImages = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg']; // Add more image URLs as needed

function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
  const imageSrc = slideshowImages[currentImageIndex];
  const slideshowImage = document.querySelector('.slideshow-img');
  slideshowImage.src = imageSrc;
}

setInterval(showNextImage, 3000); // Change image every 3 seconds