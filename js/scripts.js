var promoSlides = document.querySelectorAll('.promo-slider__slide');
var promoCurrentSlide = 0;
// var slideInterval = setInterval(nextSlide,2000);

function promoNextSlide(){
	promoSlides[promoCurrentSlide].classList.add("visually-hidden");
	promoCurrentSlide = (promoCurrentSlide+1)%promoSlides.length;
	promoSlides[promoCurrentSlide].classList.remove("visually-hidden");
}

for (var i = 0; i < promoSlides.length; i++) {
    var slide = promoSlides[i];
    slide.onclick = promoNextSlide;
}