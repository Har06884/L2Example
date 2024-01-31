// JavaScript Document
// Initialize slide index
var slideIndex = 0;

// Get all slide elements
var slides = document.getElementsByClassName("slide");

// Variable to store the timer for automatic slideshow
var timer;

// Function to change the slide by a given amount
function changeSlide(n) {
  showSlide(slideIndex += n);
}

// Function to display the current slide
function showSlide(n) {
  // Reset slide index if it exceeds the number of slides
  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }

  // Hide all slides
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Display the current slide
  slides[slideIndex].style.display = "block";
}

// Function to start the automatic slideshow
function startSlideshow() {
  // Clear the timer to avoid multiple timers running simultaneously
  clearTimeout(timer);

  // Change slide every 3 seconds (adjust the interval as needed)
  timer = setTimeout(function () {
    changeSlide(1);
    startSlideshow();
  }, 3000);
}

// Function to stop the automatic slideshow
function stopSlideshow() {
  clearTimeout(timer);
}

// Show the initial slide
showSlide(slideIndex);

// Start the automatic slideshow
startSlideshow();
