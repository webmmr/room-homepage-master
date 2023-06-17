import data from "./data.js";

// Getting DOM elements
const sliderImage = document.getElementById("slider-image");
const heroText = document.getElementById("hero-text");
const heroCopy = document.getElementById("hero-copy");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const hamBtn = document.getElementById("mobile-nav-open-btn");
const closeBtn = document.getElementById("mobile-nav-close-btn");
const mobNav = document.getElementById("mobile-nav");

// Open mobile navigation
function openMobileNav() {
  mobNav.style.transform = "translateX(0)";
}

// Close mobile navigation
function closeMobileNav() {
  mobNav.style.transform = "translateX(-100%)";
}

// Render the current slide
function renderSlide(currentSlide) {
  const { image, title, copy } = data[currentSlide];
  sliderImage.src = image;
  heroText.textContent = title;
  heroCopy.textContent = copy;
}

// Update the state of prev and next buttons
function updateButtons() {
  prevBtn.disabled = currentSlide === 0;
  nextBtn.disabled = currentSlide === totalSlides - 1;
}

let currentSlide = 0;
const totalSlides = data.length;
prevBtn.setAttribute("disabled", "");
renderSlide(currentSlide);

// Event listener for previous button
prevBtn.addEventListener("click", function () {
  if (currentSlide > 0) {
    currentSlide--;
    renderSlide(currentSlide);
    updateButtons();
  }
});

// Event listener for next button
nextBtn.addEventListener("click", function () {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    renderSlide(currentSlide);
    updateButtons();
  }
});

// Event listener for opening mobile navigation
hamBtn.addEventListener("click", openMobileNav);

// Event listener for closing mobile navigation
closeBtn.addEventListener("click", closeMobileNav);
