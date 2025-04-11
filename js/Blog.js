function showRelatedContent(event, sectionId) {
  event.preventDefault();

  // Hide all event content sections
  const contentSections = document.querySelectorAll('#country_desc > section');
  contentSections.forEach(section => {
    section.style.display = 'none';
  });

  // Show the selected content section
  const selectedSection = document.getElementById(sectionId);
  selectedSection.style.display = 'block';

  // Scroll to the events section
  const eventsSection = document.getElementById('country_desc');
  eventsSection.scrollIntoView({ behavior: 'smooth' });
}

function B2Selection(event) {
  event.preventDefault();

  const eventsSection = document.getElementById('country');
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

document.addEventListener('DOMContentLoaded', function () {
  const masonryGrid = document.querySelector('.masonry-grid');
  const masonry = new Masonry(masonryGrid, {
    itemSelector: '.masonry-item',
    columnWidth: '.masonry-item',
    percentPosition: true,
    gutter: 20, // Adjust the gap between items
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.parallax-section');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    sectionObserver.observe(section);
  });
});


