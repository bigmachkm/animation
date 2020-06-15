const slides = document.querySelectorAll(".sre-slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = true;
const intervalTime = 5000;
let slideInterval;

// Methods
const nextSlide = () => {
  // Get the current class
  const current = document.querySelector(".current");
  // Remove current class to be added later
  current.classList.remove("current");
  // Look for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add("current");
  } else {
    //  Add current to the first div
    slides[0].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

const prevSlide = () => {
  // Get the current class
  const current = document.querySelector(".current");
  // Remove current class to be added later
  current.classList.remove("current");
  // Look for previous slide
  if (current.previousElementSibling) {
    // Add current to next sibling
    current.previousElementSibling.classList.add("current");
  } else {
    //  Add current to the last image
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

// Add button events
next.addEventListener("click", (e) => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener("click", (e) => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto interval for slides
if (auto) {
  // Deliver next slide at time interval
  slideInterval = setInterval(nextSlide, intervalTime);
}
