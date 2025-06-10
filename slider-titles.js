const titles = [
  "Welcome to GreenCare Hospital",
  "Advanced Medical Care",
  "Empathy & Excellence Combined"
];

const carousel = document.getElementById('heroCarousel');
const titleEl = document.getElementById('heroTitle');

carousel.addEventListener('slide.bs.carousel', function (event) {
  titleEl.innerText = titles[event.to];
});

