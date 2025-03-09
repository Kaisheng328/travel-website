
document.addEventListener('DOMContentLoaded', function () {
    const swiperContainers = document.querySelectorAll('.init-swiper');

    swiperContainers.forEach(container => {
      const configElement = container.querySelector('.swiper-config');
      const config = JSON.parse(configElement.innerHTML);

      new Swiper(container, config);
    });
  });

  function showRelatedContent(event, sectionId) {
    event.preventDefault();

    // Hide all event content sections
    const contentSections = document.querySelectorAll('.event-content');
    contentSections.forEach(section => {
      section.style.display = 'none';
    });

    // Show the selected content section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';

    // Scroll to the events section
    const eventsSection = document.getElementById('events');
    eventsSection.scrollIntoView({ behavior: 'smooth' });
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
document.addEventListener('DOMContentLoaded', function () {
  const username = localStorage.getItem('username');
  const signInModal = document.getElementById('signInModal');
  const closeButton = document.querySelector('.close');

  if (!username) {
      signInModal.style.display = 'block'; // Show modal if not logged in
  }

  // Close modal when the close button is clicked
  closeButton.addEventListener('click', function () {
      signInModal.style.display = 'none';
  });

  // Login Form Submission
  document.getElementById('loginForm').addEventListener('submit', function (event) {
      event.preventDefault();
      
      const email = document.getElementById('loginEmail').value;
      localStorage.setItem('username', email); // Save username
      signInModal.style.display = 'none'; // Close modal after login
      alert('Login successful!');
      location.reload(); // Reload to apply login changes
  });
});

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