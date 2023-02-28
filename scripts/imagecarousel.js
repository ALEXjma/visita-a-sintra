// JavaScript code to implement the image carousel
const carousel = document.querySelector("#image-carousel");
const prevButton = carousel.querySelector(".prev");
const nextButton = carousel.querySelector(".next");
const indicator = carousel.querySelector(".indicator");
const images = carousel.querySelectorAll("img");
var currentIndex = 0;

images[currentIndex].onload = function () {
    carousel.style.width = "500px";
    var height = images[currentIndex].height * 500 / images[currentIndex].width;
    carousel.style.height = `${height}px`
};

function showImage(index) {
  images.forEach((img, i) => {
    if (i === index) {
      img.style.opacity = 1;
    } else {
      img.style.opacity = 0;
    }
  });
  currentIndex = index;
  updateIndicator();
  updateCarouselSize();
}

function updateIndicator() {
  indicator.textContent = `${currentIndex + 1} / ${images.length}`;
}

function updateCarouselSize() {
  /*carousel.style.width = `${images[currentIndex].width}px`;*/
  carousel.style.height = `${images[currentIndex].height}px`;
}

prevButton.addEventListener("click", () => {
  var index = currentIndex - 1;
  if (index < 0) {
    index = images.length - 1;
  }
  showImage(index);
});

nextButton.addEventListener("click", () => {
  var index = currentIndex + 1;
  if (index >= images.length) {
    index = 0;
  }
  showImage(index);
});

showImage(currentIndex);
