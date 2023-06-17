// data of three slides including image, title, copy
import data from "./data.js";

//getting the DOM nodes
const sliderImage = document.getElementById("slider-image"),
  heroText = document.getElementById("hero-text"),
  heroCopy = document.getElementById("hero-copy"),
  prevBtn = document.getElementById("prev"),
  nextBtn = document.getElementById("next");

// initialization
let currentSlide = 0;
const totalSlides = data.length;
prevBtn.setAttribute("disabled", "");

//rendering the slides
function renderSlide(currentSlide) {
  sliderImage.src = data[currentSlide].image;
  heroText.textContent = data[currentSlide].title;
  heroCopy.textContent = data[currentSlide].copy;
}

// updating the slide number globally
function setCurrentSlide(current) {
  currentSlide = current;
}

prevBtn.addEventListener("click", function () {
  //decreasing the current slide no to get the prev slide id
  currentSlide = currentSlide - 1;

  //updating the current Slide value globally
  setCurrentSlide(currentSlide);

  //rendering the slide
  renderSlide(currentSlide);

  // checking if the current slide is the first slide
  if (currentSlide == 0) {
    // if the first slide then setting the prev btn disabled
    prevBtn.setAttribute("disabled", "");
  }

  // enabling the next btn
  if (currentSlide == totalSlides - 1 || currentSlide >= 0) {
    nextBtn.removeAttribute("disabled");
  }
});

nextBtn.addEventListener("click", function () {
  // increasing the current slide id
  currentSlide = currentSlide + 1;

  //updating the current Slide value globally
  setCurrentSlide(currentSlide);

  // removing the disabled status of prev btn
  prevBtn.removeAttribute("disabled");

  // rendering the slide based on current slide
  if (currentSlide < totalSlides) {
    renderSlide(currentSlide);
  }

  // disabling the next btn for the last slide
  if (currentSlide == totalSlides - 1) {
    nextBtn.setAttribute("disabled", "");
  }
});
