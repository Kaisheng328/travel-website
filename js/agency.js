
document.addEventListener('DOMContentLoaded', function () {
    // Get elements
    const headerContent = document.querySelector('.header-content');
    const scrollDown = document.querySelector('.scroll-down');
    const navContainer = document.querySelector('.nav-container');
    const sections = document.querySelectorAll('section');

    // Show header content with animation after page load
    setTimeout(() => {
        headerContent.classList.add('visible');
    }, 500);

    // Smooth scroll function for the scroll down arrow and navigation links
    function smoothScroll(target) {
        const element = document.querySelector(target);
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
        });
    }

    // Add scroll event for the scroll down arrow
    scrollDown.addEventListener('click', function () {
        smoothScroll('#destinations');
    });

    // Add scroll event for all navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            smoothScroll(this.getAttribute('href'));
        });
    });

    // Check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) / 1.3 &&
            rect.bottom >= 0
        );
    }

    // Add scroll event listener for navbar and section animations
    window.addEventListener('scroll', function () {
        // Change navbar background on scroll
        if (window.scrollY > 50) {
            navContainer.classList.add('nav-scrolled');
        } else {
            navContainer.classList.remove('nav-scrolled');
        }

        // Animate sections when they come into view
        sections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add('visible');
            }
        });
    });

    // Trigger scroll event once to check initial positions
    window.dispatchEvent(new Event('scroll'));
});
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

