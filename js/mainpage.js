
function showAboutUs(event) {
    event.preventDefault();
    document.querySelector('.hero-section').style.display = 'none';
    document.querySelectorAll('.container').forEach(el => {
        if (!el.closest('#about-us-section')) {
            el.style.display = 'none';
        }
    });
    document.getElementById('about-us-section').style.display = 'block';
    window.scrollTo(0, 0);
}

// Hide 'About Us' section
function hideAboutUs() {
    document.querySelector('.hero-section').style.display = 'block';
    document.querySelectorAll('.container').forEach(el => {
        if (!el.closest('#about-us-section')) {
            el.style.display = 'block';
        }
    });
    document.getElementById('about-us-section').style.display = 'none';
    window.scrollTo(0, 0);
}

// Carousel functionality
const carousel = document.querySelector('.carousel-items');
const activityCards = document.querySelectorAll('.activity-card');

let isDown = false;
let startX;
let scrollLeft;

// Add event listeners for mouse interaction
carousel.addEventListener('mousedown', (e) => {
  isDown = true;
  carousel.style.cursor = 'grabbing';
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
  // Prevent default behavior to avoid text selection during drag
  e.preventDefault();
});

carousel.addEventListener('mouseleave', () => {
  isDown = false;
  carousel.style.cursor = 'grab';
});

carousel.addEventListener('mouseup', () => {
  isDown = false;
  carousel.style.cursor = 'grab';
});

carousel.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 2; // The multiplier determines scroll speed
  carousel.scrollLeft = scrollLeft - walk;
});

// Add touch support for mobile devices
carousel.addEventListener('touchstart', (e) => {
  isDown = true;
  startX = e.touches[0].pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('touchend', () => {
  isDown = false;
});

carousel.addEventListener('touchmove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.touches[0].pageX - carousel.offsetLeft;
  const walk = (x - startX) * 2;
  carousel.scrollLeft = scrollLeft - walk;
});

// Optional: Remove the arrow buttons since we're using cursor navigation
document.querySelectorAll('.carousel-control').forEach(button => {
  button.style.display = 'none';
});

//Redirect to activity page
function redirectToActivityPage(category) {
    // Redirect to the activity page with the filter category in the query string
    window.location.href = `activityPage.html?category=${encodeURIComponent(category)}`;
}
// Get the back to top button
const backToTopButton = document.getElementById("backToTop");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
backToTopButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scroll to top
    });
});

