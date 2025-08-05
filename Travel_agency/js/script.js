const images = [
   '/Travel_agency/assets/images/lake.jpg',
   '/Travel_agency/assets/images/tracking.jpg',
   '/Travel_agency/assets/images/wildlife.jpg',
   '/Travel_agency/assets/images/grassland.jpg',
  '/Travel_agency/assets/images/bangladesh_momentum.jpg'
];

let current = 0;
const hero = document.querySelector('.hero');

function changeBackground() {
    if (images.length > 0 && hero) {
        hero.style.backgroundImage =` url('${images[current]}')`;
        current = (current + 1) % images.length;
    }
}
setInterval(changeBackground,1000);
changeBackground();
