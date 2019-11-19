
//slider


// function carouselHeight() {
//   var carouselImg = document.querySelector('.carousel');
//   var carouselImgWidth = carouselImg.offsetWidth;
//   var carouselImgHeight;
//   switch (carouselImgWidth) {
//       case carouselImgWidth > 1199: carouselImgHeight = 800;
//       case carouselImgWidth < 1200 && carouselImgWidth > 991: carouselImgHeight = 650;
//       case carouselImgWidth < 992 && carouselImgWidth > 767: carouselImgHeight = 514;
//       case carouselImgWidth < 768 && carouselImgWidth > 575: carouselImgHeight = 395;
//       case carouselImgWidth < 576 && carouselImgWidth > 479: carouselImgHeight = 329;
//       case carouselImgWidth < 480: carouselImgHeight = 219;
//   }
//   document.querySelector('.carousel').style.height = carouselImgHeight + 'px';
// }

// carouselHeight();

var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}
function minusSlide() {
    showSlides(slideIndex -= 1);  
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

setInterval(function () {
    plusSlide();
}, 3000);
