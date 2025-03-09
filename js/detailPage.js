// Function to get URL parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Set page title based on activity name
document.addEventListener('DOMContentLoaded', () => {
    const activityName = getQueryParam('name');
    if (activityName) {
        document.title = activityName;

    }
});

// Function to get activity data from local storage
function getActivityData(name) {
    const activities = JSON.parse(localStorage.getItem('activities'));
    return activities.find(activity => activity.name === name);
}

// Set page title and details based on activity name
document.addEventListener('DOMContentLoaded', () => {
    const activityName = getQueryParam('name');
    if (activityName) {
        const activity = getActivityData(activityName);
        if (activity) {
            document.getElementById('activity-title').textContent = activity.name;
            document.getElementById('activity-category').textContent = `${activity.category.join(' • ')}`;
            document.getElementById('activity-rating').textContent = `Rating: ${activity.ratings} ⭐`;
            document.getElementById('long-description').textContent = activity.longDescription;
            const formattedHours = formatOperatingHours(activity.OperatingHour);
            document.getElementById('operating-hour').innerHTML = `<strong>Operating Hours:</strong><br>${formattedHours}`;

            // Add event listener for "See more" link
            const seeMoreLink = document.getElementById('see-more-link');
            const collapseLink = document.getElementById('collapse-link');
            seeMoreLink.addEventListener('click', (e) => {
                e.preventDefault();
                const hiddenRows = document.querySelectorAll('.operating-hour-row[style*="display: none"]');
                hiddenRows.forEach(row => row.style.display = 'block');
                seeMoreLink.style.display = 'none';
                collapseLink.style.display = 'inline';
            });

            // Add event listener for "Collapse" link
            collapseLink.addEventListener('click', (e) => {
                e.preventDefault();
                const visibleRows = document.querySelectorAll('.operating-hour-row:not([style*="display: none"])');
                visibleRows.forEach(row => row.style.display = 'none');
                seeMoreLink.style.display = 'inline';
                collapseLink.style.display = 'none';
            });

            // Check if the activity is open now
            const openNowElement = document.getElementById('open-now-status');
            if (isOpenNow(activity.OperatingHour)) {
                openNowElement.innerHTML = '<strong>Open now</strong>';
                openNowElement.style.color = 'green';
            } else {
                openNowElement.innerHTML = '<strong>Closed now</strong>';
                openNowElement.style.color = 'red';
            }

            // Populate carousel with images
            const carouselImages = document.getElementById('carousel-images');
            const images = activity.moreImages || [];
            if (images.length > 0) {
                carouselImages.innerHTML = '';
                images.forEach((image, index) => {
                    const isActive = index === 0 ? 'active' : '';
                    carouselImages.innerHTML += `
                        <div class="carousel-item ${isActive}">
                            <img src="${image}" class="d-block w-100" alt="Image ${index + 1}">
                        </div>
                    `;
                });
            } else {
                carouselImages.innerHTML = '<div class="carousel-item"><p>No images available</p></div>';
            }

            // Set video source based on activity data
            setVideo(activity.video);

            document.getElementById('activity-address').innerHTML = `
                ${activity.address}
            `;
            // Initialize the map with the activity address
            initMap(activity.address);

        }
    }
});

// Function to check if the current time is within the operating hours
function isOpenNow(operatingHours) {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const currentTime = now.getHours() * 100 + now.getMinutes();
    const hoursToday = operatingHours[dayOfWeek];

    if (hoursToday) {
        const [start, end] = hoursToday.split('-').map(time => parseInt(time.replace(':', ''), 10));
        return currentTime >= start && currentTime <= end;
    }
    return false;
}

// Function to format operating hours for display
function formatOperatingHours(operatingHours) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let formattedHours = '';

    // Display the first day's hours
    formattedHours += `<div class="operating-hour-row">${daysOfWeek[0]}: ${operatingHours[0]}</div>`;

    // Display the remaining days' hours, initially hidden
    for (let i = 1; i < 7; i++) {
        if (operatingHours[i]) {
            formattedHours += `<div class="operating-hour-row" style="display: none;">${daysOfWeek[i]}: ${operatingHours[i]}</div>`;
        }
    }
    return formattedHours.trim();
}

// Function to set the video in the video section
function setVideo(videoLink) {

    const videoId = new URL(videoLink).searchParams.get('v');
    const videoSection = document.getElementById('video-section-content');

    if (videoId) {
        videoSection.innerHTML = `
            <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/${videoId}" allowfullscreen></iframe>
            </div>
        `;
    } else {
        videoSection.innerHTML = '<p>No video available</p>';
    }

}

// Function to initialize Google Map
let map = L.map('map').setView([51.505, -0.09], 13); // Default location (London)

// Load OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

let marker;

function initMap(address) {
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${address}`)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                let lat = parseFloat(data[0].lat);
                let lon = parseFloat(data[0].lon);

                // Update map view
                map.setView([lat, lon], 15);

                // Remove old marker if exists
                if (marker) {
                    map.removeLayer(marker);
                }

                // Add new marker
                marker = L.marker([lat, lon]).addTo(map)
                    .bindPopup(`<b>${address}</b><br>Lat: ${lat}, Lon: ${lon}`)
                    .openPopup();
            } else {
                document.getElementById('map').innerHTML = '<p>Location not found. Try another address.</p>';
            }
        })
        .catch(error => console.error('Error:', error));
}

// Get the back to top button
const backToTopButton = document.getElementById("backToTop");
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};
backToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
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

