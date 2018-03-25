// оживление слайдера с товарами
var promoSlides = document.querySelectorAll('.promo-slider__slide');
var promoCurrentSlide = 0;
// var slideInterval = setInterval(nextSlide,2000);

function promoNextSlide() {
  promoSlides[promoCurrentSlide].classList.add("visually-hidden");
  promoCurrentSlide = (promoCurrentSlide + 1) % promoSlides.length;
  promoSlides[promoCurrentSlide].classList.remove("visually-hidden");
}

for (var i = 0; i < promoSlides.length; i++) {
  var slide = promoSlides[i];
  slide.onclick = promoNextSlide;
}

// оживление слайдера услуг
var servicesSlidesControls = document.querySelectorAll('.services__menu-item');
var servicesSlides = document.querySelectorAll('.service-slide');

var controls2slidesDict = {
  "delivery-slide-control": ".services__delivery",
  "guarantee-slide-control": ".services__guarantee",
  "credit-slide-control": ".services__credit"
};

function servicesTurnOnSlide(event) {
  for (var j = 0; j < servicesSlidesControls.length; j++) {
    var button = servicesSlidesControls[j];
    button.classList.remove("services__selected-slide");
  };
  this.classList.add("services__selected-slide");

  for (let s = 0; s < servicesSlides.length; s++) {
    const slide = servicesSlides[s];
    slide.classList.add("visually-hidden");
  };
  var currentSlide = document.querySelector(controls2slidesDict[this.id])
  currentSlide.classList.remove("visually-hidden");
}

for (var i = 0; i < servicesSlidesControls.length; i++) {
  var button = servicesSlidesControls[i];
  button.onclick = servicesTurnOnSlide;
}
