document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');

    if (!username) {
        // If not logged in, show the sign-in modal
        document.getElementById('signInModal').style.display = 'block';
        return; // Stop further execution
    }

    // If logged in, load favorites
    loadFavorites();
});

function loadFavorites() {
    const storedActivities = JSON.parse(localStorage.getItem('activities')) || [];
    const favoritePackageIds = JSON.parse(localStorage.getItem('favoritePackages')) || [];
    const storedPackages = JSON.parse(localStorage.getItem('packages')) || [];

    const favoritedActivities = storedActivities.filter(activity => activity.favorite);
    const favoritedPackages = storedPackages.filter(pkg => favoritePackageIds.includes(pkg.id));

    displayFavorites(favoritedActivities, favoritedPackages);
}

function displayFavorites(activities, packages) {
    const activitiesContainer = document.getElementById('favorited-activities');
    const packagesContainer = document.getElementById('favorited-packages');

    if (!activitiesContainer || !packagesContainer) {
        console.error('Container elements not found');
        return;
    }

    activitiesContainer.innerHTML = activities.length > 0 
        ? activities.map(createActivityCard).join('') 
        : '<p>No favorited activities.</p>';

    packagesContainer.innerHTML = packages.length > 0 
        ? packages.map(createPackageCard).join('') 
        : '<p>No favorited packages.</p>';

    attachRemoveListeners();
}

function createActivityCard(activity) {
    return `
        <div class="favorite-card" data-type="activity" data-id="${activity.name}">
            <a href="detailPage.html?name=${encodeURIComponent(activity.name)}">
                <img src="${activity.imageUrl}" alt="${activity.name}" class="favorite-image">
                <div class="favorite-details">
                    <h3>${activity.name}</h3>
                    <p>${activity.category.join(' • ')}</p>
                    <p>${activity.description}</p>
                    <span class="ratings">⭐ ${activity.ratings}</span>
                </div>
            </a>
            <button class="remove-favorite">Remove</button>
        </div>
    `;
}

function createPackageCard(pkg) {
    return `
        <div class="favorite-card" data-type="package" data-id="${pkg.id}">
            <a href="package-details.html?package=${encodeURIComponent(pkg.id)}">
                <img src="${pkg.imageUrl}" alt="${pkg.title}" class="favorite-image">
                <div class="favorite-details">
                    <h3>${pkg.title}</h3>
                    <p>${pkg.description}</p>
                    <span class="price">${pkg.price}</span>
                </div>
            </a>
            <button class="remove-favorite">Remove</button>
        </div>
    `;
}

function attachRemoveListeners() {
    document.querySelectorAll('.remove-favorite').forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.favorite-card');
            const type = card.dataset.type;
            const id = card.dataset.id;

            if (type === 'activity') {
                removeActivityFavorite(id);
            } else if (type === 'package') {
                removePackageFavorite(id);
            }

            card.remove();
        });
    });
}

function removeActivityFavorite(activityName) {
    let activities = JSON.parse(localStorage.getItem('activities')) || [];
    activities = activities.map(activity => {
        if (activity.name === activityName) {
            activity.favorite = false;
        }
        return activity;
    });
    localStorage.setItem('activities', JSON.stringify(activities));
}

function removePackageFavorite(packageId) {
    let favorites = JSON.parse(localStorage.getItem('favoritePackages')) || [];
    favorites = favorites.filter(id => id !== packageId);
    localStorage.setItem('favoritePackages', JSON.stringify(favorites));
}

// Function to add packages to local storage if not already present
const addPackagesToLocalStorage = (newPackages) => {
    try {
        let storedPackages = JSON.parse(localStorage.getItem('packages')) || [];
        const packageMap = new Map(storedPackages.map(pkg => [pkg.id, pkg]));
        newPackages.forEach(pkg => packageMap.set(pkg.id, pkg));
        localStorage.setItem('packages', JSON.stringify(Array.from(packageMap.values())));
    } catch (error) {
        console.error('Error updating local storage:', error);
    }
};

// Initialize packages in local storage (call this when setting up the packages page)
function initializePackages() {
    const packages = [
    {
        id: 'kuala-lumpur',
        title: 'Kuala Lumpur (3D2N)',
        description: 'Explore the vibrant capital of Malaysia with its iconic Petronas Towers, bustling markets, and rich cultural heritage.',
        price: 'RM1,099',
        imageUrl: 'https://cdn.pixabay.com/photo/2013/08/09/05/58/kuala-lumpur-170985_1280.jpg'
    },
    {
        id: 'langkawi',
        title: 'Langkawi (4D3N)',
        description: 'Relax on the beautiful beaches of Langkawi, an island paradise known for its clear waters, luxury resorts, and stunning landscapes.',
        price: 'RM1,199',
        imageUrl: 'https://cdn.pixabay.com/photo/2018/03/18/16/51/nature-3237434_1280.jpg'
    },
    {
        id: 'penang',
        title: 'Penang (4D3N)',
        description: 'Discover the historical charm of Penang, famous for its street food, colonial architecture, and cultural diversity.',
        price: 'RM999',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/08/17/07/38/georgetown-4411602_1280.jpg'
    },
    {
        id: 'sabah',
        title: 'Sabah (4D3N)',
        description: 'Embark on an adventure in Sabah, home to Mount Kinabalu, lush rainforests, and incredible wildlife.',
        price: 'RM1,299',
        imageUrl: 'https://cdn.pixabay.com/photo/2020/07/11/03/46/sabah-5392664_1280.jpg'
    },
    {
        id: 'melaka',
        title: 'Melaka (3D2N)',
        description: 'Explore the historical city of Melaka, known for its colonial architecture, vibrant street life, and rich heritage.',
        price: 'RM799',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/09/25/10/04/dutch-square-957004_1280.jpg'
    }
];
    addPackagesToLocalStorage(packages);
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