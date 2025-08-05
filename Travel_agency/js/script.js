const images = [
   '../assets/images/lake.jpg',
   '../assets/images/bangladesh_momentum.jpg',
   'images/tracking.jpg',
   'images/wildlife.jpg'
];

let current = 0;
const hero = document.querySelector('Section.hero');

function changeBackground() {
    if (images.length > 0 && hero) {
        hero.style.backgroundImage = url('${images[current]}');
        current = (current + 1) % images.length;
    }
}

setInterval(changeBackground, 100);
changeBackground(); // Initial call

const imageModal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');

  imageModal.addEventListener('show.bs.modal', function (event) {
    const triggerImage = event.relatedTarget;
    const imageUrl = triggerImage.getAttribute('data-bs-image');
    modalImage.src = imageUrl;
  });
