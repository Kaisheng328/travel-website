// Define all packages
const packages = [
    {
        id: 'kuala-lumpur',
        title: 'Kuala Lumpur (3D2N)',
        description: 'Explore Malaysia’s exciting capital! Visit the iconic Petronas Towers, shop at lively street markets, and enjoy the city’s unique blend of culture and modern life.',
        price: 'RM1,099',
        imageUrl: 'https://www.malaysia-china.com.my/wp-content/uploads/2022/02/kl-night-view_7.jpg'
    },
    {
        id: 'langkawi',
        title: 'Langkawi (4D3N)',
        description: 'Relax in Langkawi! Enjoy soft beaches, clear blue seas, and amazing island views—perfect for your dream getaway.',
        price: 'RM1,199',
        imageUrl: 'https://themalayapost.my/wp-content/uploads/2023/11/a9ebceb6-4e24-48fb-9ad6-16572c9576aa.jpg'
    },
    {
        id: 'penang',
        title: 'Penang (4D3N)',
        description: 'Explore Penang’s rich culture and food! Taste delicious street food and stroll through the colorful streets of George Town.',
        price: 'RM999',
        imageUrl: 'https://i.ex-cdn.com/vntravellive.com/files/news/2023/10/13/den-thien-duong-bien-dao-penang-nen-di-nhung-dau-112140.jpg'
    },
    {
        id: 'sabah',
        title: 'Sabah (4D3N)',
        description: 'Discover Sabah’s wild side! Climb majestic Mount Kinabalu, wander through green rainforests, and spot amazing animals up close.',
        price: 'RM1,299',
        imageUrl: 'https://bimp-eaga.asia/sites/default/files/2024-02/iStock-153570866.jpg'
    },
    {
        id: 'melaka',
        title: 'Melaka (3D2N)',
        description: 'Step into the charm of Melaka! Explore colorful streets, see old Dutch and Portuguese buildings, and enjoy the city’s rich heritage.',
        price: 'RM799',
        imageUrl: 'https://media.cntravellerme.com/photos/65d748e1141d7fa040c9767a/master/w_1600%2Cc_limit/1227193133'
    }
];

// Retrieve existing packages from local storage
let storedPackages = JSON.parse(localStorage.getItem('packages')) || [];

// Function to add packages to local storage if not already present
const addPackagesToLocalStorage = (newPackages) => {
    try {
        const packageMap = new Map(storedPackages.map(pkg => [pkg.id, pkg]));
        newPackages.forEach(pkg => packageMap.set(pkg.id, pkg));
        localStorage.setItem('packages', JSON.stringify(Array.from(packageMap.values())));
    } catch (error) {
        console.error('Error updating local storage:', error);
    }
};

// Add new packages to local storage
addPackagesToLocalStorage(packages);

// Retrieve packages from local storage again to ensure no duplicates
storedPackages = JSON.parse(localStorage.getItem('packages'));

// Dynamically generate the package HTML elements
const packageContainer = document.getElementById('packageContainer');
if (!packageContainer) {
    console.error('Package container element not found');
} else {
    storedPackages.forEach(pkg => {
        const packageElement = document.createElement('div');
        packageElement.classList.add('package');
        packageElement.setAttribute('data-package-id', pkg.id);

        packageElement.innerHTML = `
            <a href="package-details.html?package=${pkg.id}">
                <img src="${pkg.imageUrl}" alt="${pkg.title}">
                <h3>${pkg.title}</h3>
                <p>${pkg.description}</p>
                <p class="package-price">${pkg.price}</p>
            </a>
            <button class="favorite-btn">&#10084;</button>
        `;

        packageContainer.appendChild(packageElement);
    });
}

// Function to check if the user is logged in using local storage
function isLoggedIn() {
    return localStorage.getItem('username') !== null; // Check login status in local storage
}

// Function to handle the favorite button click
function handleFavoriteClick(event) {
    console.log('Favorite button clicked');

    if (!isLoggedIn()) {
        console.log('User not logged in');
        showLoginModal();
        return;
    }

    const button = event.currentTarget;
    const packageId = button.closest('.package').getAttribute('data-package-id');
    
    // Toggle button's active state
    button.classList.toggle('active');
    console.log(`Button clicked. Package ID: ${packageId}. Active: ${button.classList.contains('active')}`);
    
    try {
        let favoritePackages = JSON.parse(localStorage.getItem('favoritePackages')) || []; // Correct key

        if (button.classList.contains('active')) {
            if (!favoritePackages.includes(packageId)) {
                favoritePackages.push(packageId);
            }
        } else {
            favoritePackages = favoritePackages.filter(id => id !== packageId);
        }
    
        localStorage.setItem('favoritePackages', JSON.stringify(favoritePackages));
    } catch (error) {
        console.error('Error updating favorites:', error);
    }
}

// Function to update favorite button states (initialize based on stored favoritePackages)
function updateFavoriteButtons() {
    console.log('Updating favorite buttons');

    try {
        const favoritePackages = JSON.parse(localStorage.getItem('favoritePackages')) || []; // Correct key

        document.querySelectorAll('.favorite-btn').forEach(button => {
            const packageId = button.closest('.package').getAttribute('data-package-id');
            if (favoritePackages.includes(packageId) && isLoggedIn()) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    } catch (error) {
        console.error('Error updating favorite buttons:', error);
    }
}

// Function to show the login modal
function showLoginModal() {
    var modal = document.getElementById("signInModal");
    if (modal) {
        modal.style.display = "block";
    } else {
        console.error('Modal element not found');
    }
}

// Close the modal when clicking on the close button
document.querySelector(".close")?.addEventListener('click', function() {
    var modal = document.getElementById("signInModal");
    if (modal) {
        modal.style.display = "none";
    } else {
        console.error('Modal element not found');
    }
});

// Close the modal when clicking outside of it
window.addEventListener('click', function(event) {
    var modal = document.getElementById("signInModal");
    if (modal && event.target === modal) {
        modal.style.display = "none";
    }
});

// Function to handle user logout
function logout() {
    // Clear user login status from local storage
    localStorage.removeItem('username'); // Clear login status

    // Optionally clear the favoritePackages if you want to reset them on logout
    // localStorage.removeItem('favoritePackages'); // Uncomment if needed

    // Update the favorite button states (to deactivate them)
    updateFavoriteButtons();

    // Redirect to the homepage or show a logout message
    window.location.href = 'plans-packages.html'; // Adjust redirection as needed
}

// Initialize favorite button states and add event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    updateFavoriteButtons();  // Initialize favorite button states
    document.querySelectorAll('.favorite-btn').forEach(button => {
        button.addEventListener('click', handleFavoriteClick);
    });
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


