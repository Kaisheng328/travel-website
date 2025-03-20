
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

