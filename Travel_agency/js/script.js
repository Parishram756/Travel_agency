const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg',
  'image5.jpg'
];

let current = 0;
const hero = document.querySelector('.hero');

function changeBackground() {
  hero.style.backgroundImage = url('${images[current]}');
  current = (current + 1) % images.length;
}

setInterval(changeBackground, 5000);
changeBackground(); // Initial call