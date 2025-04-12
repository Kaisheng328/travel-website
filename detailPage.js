// Function to get URL parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Set page title based on activity name
document.addEventListener('DOMContentLoaded', () => {
    const activityName = getQueryParam('name');
    if (activityName) {
        document.title = activityName + " - TravelGO";
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
            // Set basic info
            document.getElementById('activity-title').textContent = activity.name;
            document.getElementById('activity-category').textContent = `${activity.category.join(' • ')}`;
            document.getElementById('activity-rating').textContent = `Rating: ${activity.ratings} ⭐`;
            document.getElementById('long-description').textContent = activity.longDescription;
            
            // Format and display operating hours
            const formattedHours = formatOperatingHours(activity.OperatingHour);
            document.getElementById('operating-hour').innerHTML = `<strong>Operating Hours:</strong><br>${formattedHours}`;

            // Add event listener for "See more" link
            const seeMoreLink = document.getElementById('see-more-link');
            const collapseLink = document.getElementById('collapse-link');
            seeMoreLink.addEventListener('click', (e) => {
                e.preventDefault();
                const hiddenRows = document.querySelectorAll('.operating-hour-row[style*="display: none"]');
                hiddenRows.forEach(row => {
                    row.style.display = 'block';
                    // Add a subtle fade-in animation
                    row.style.animation = 'fadeIn 0.5s ease forwards';
                });
                seeMoreLink.style.display = 'none';
                collapseLink.style.display = 'inline';
            });

            // Add event listener for "Collapse" link
            collapseLink.addEventListener('click', (e) => {
                e.preventDefault();
                const visibleRows = document.querySelectorAll('.operating-hour-row:not([style*="display: none"])');
                // Skip the first row (Sunday)
                for (let i = 1; i < visibleRows.length; i++) {
                    visibleRows[i].style.display = 'none';
                }
                seeMoreLink.style.display = 'inline';
                collapseLink.style.display = 'none';
            });

            // Check if the activity is open now
            const openNowElement = document.getElementById('open-now-status');
            if (isOpenNow(activity.OperatingHour)) {
                openNowElement.innerHTML = '<strong>Open now</strong>';
                openNowElement.style.color = '#4caf50';
                openNowElement.style.backgroundColor = '#e8f5e9';
                openNowElement.style.border = '1px solid #c8e6c9';
            } else {
                openNowElement.innerHTML = '<strong>Closed now</strong>';
                openNowElement.style.color = '#f44336';
                openNowElement.style.backgroundColor = '#ffebee';
                openNowElement.style.border = '1px solid #ffcdd2';
            }

            // Populate carousel with images
            populateCarousel(activity.moreImages || []);

            // Set video source based on activity data
            setVideo(activity.video);

            // Set address and initialize map
            document.getElementById('activity-address').innerHTML = activity.address;
            initMap(activity.address);
        }
    }
});

// Function to populate the carousel with images
function populateCarousel(images) {
    const carouselImages = document.getElementById('carousel-images');
    if (images.length > 0) {
        carouselImages.innerHTML = '';
        images.forEach((image, index) => {
            const isActive = index === 0 ? 'active' : '';
            carouselImages.innerHTML += `
                <div class="carousel-item ${isActive}">
                    <img src="${image}" class="d-block w-100" alt="Activity image ${index + 1}">
                </div>
            `;
        });
        
        // Initialize carousel with JavaScript
        $('.carousel').carousel({
            interval: 3000,
            pause: 'hover'
        });
    } else {
        carouselImages.innerHTML = `
            <div class="carousel-item active">
                <div class="text-center py-5">
                    <i class="bi bi-image" style="font-size: 3rem; color: #ccc;"></i>
                    <p class="mt-3">No images available</p>
                </div>
            </div>`;
    }
}

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
    formattedHours += `<div class="operating-hour-row">${daysOfWeek[0]}: ${operatingHours[0] || 'Closed'}</div>`;

    // Display the remaining days' hours, initially hidden
    for (let i = 1; i < 7; i++) {
        if (operatingHours[i]) {
            formattedHours += `<div class="operating-hour-row" style="display: none;">${daysOfWeek[i]}: ${operatingHours[i]}</div>`;
        } else {
            formattedHours += `<div class="operating-hour-row" style="display: none;">${daysOfWeek[i]}: Closed</div>`;
        }
    }
    return formattedHours.trim();
}

// Function to set the video in the video section
function setVideo(videoLink) {
    const videoSection = document.getElementById('video-section-content');
    
    if (videoLink && videoLink.includes('youtube')) {
        try {
            const videoId = new URL(videoLink).searchParams.get('v');
            if (videoId) {
                videoSection.innerHTML = `
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/${videoId}" 
                        allowfullscreen title="Activity video"></iframe>
                    </div>
                `;
                return;
            }
        } catch (e) {
            console.error('Error parsing video URL:', e);
        }
    }
    
    // Fallback for no video or invalid URL
    videoSection.innerHTML = `
        <div class="text-center py-5 rounded bg-light">
            <i class="bi bi-camera-video" style="font-size: 3rem; color: #aaa;"></i>
            <p class="mt-3">No video available for this activity</p>
        </div>`;
}

// Function to initialize Google Map
let map = L.map('map').setView([3.1569, 101.7123], 13); // Default location (Kuala Lumpur)

// Load OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

let marker;

// Known landmark coordinates in Malaysia
const knownLocations = {
    'KLCC Park': { lat: 3.1542, lng: 101.7132 },
    'KLCC Tower 360': { lat: 3.1588, lng: 101.7111 },
    'Petronas Twin Tower': { lat: 3.1577, lng: 101.7120 },
    'Petronas Towers': { lat: 3.1577, lng: 101.7120 },
    'Batu Caves': { lat: 3.2366, lng: 101.6838 },
    'Merdeka Square': { lat: 3.1491, lng: 101.6956 },
    'Bukit Bintang': { lat: 3.1488, lng: 101.7137 },
    'Kuala Lumpur Tower': { lat: 3.1537, lng: 101.7033 },
    'National Mosque of Malaysia': { lat: 3.1407, lng: 101.6915 },
    'Islamic Arts Museum Malaysia': { lat: 3.1421, lng: 101.6910 },
    'Aquaria KLCC': { lat: 3.1543, lng: 101.7115 },
    'Pavilion Kuala Lumpur': { lat: 3.1486, lng: 101.7133 },
    'Central Market': { lat: 3.1456, lng: 101.6958 },
    'Petaling Street': { lat: 3.1437, lng: 101.6976 },
    'Kuala Lumpur Butterfly Park': { lat: 3.1427, lng: 101.6887 }
};

function initMap(address) {
    if (!address) {
        document.getElementById('map').innerHTML = '<p class="text-center py-5">Address information not available</p>';
        return;
    }
    
    // Check if it's a known landmark first
    for (const landmark in knownLocations) {
        if (address.toLowerCase().includes(landmark.toLowerCase())) {
            const coordinates = knownLocations[landmark];
            setMapView(coordinates.lat, coordinates.lng, address);
            return;
        }
    }
    
    // If not a known landmark, try geocoding with Nominatim
    // Add Malaysia to improve geocoding accuracy
    const searchAddress = address.toLowerCase().includes('malaysia') ? 
        address : `${address}, Malaysia`;
    
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchAddress)}&limit=1`)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                let lat = parseFloat(data[0].lat);
                let lon = parseFloat(data[0].lon);
                setMapView(lat, lon, address);
            } else {
                // Fallback to central Kuala Lumpur if location not found
                console.warn('Location not found via Nominatim, using fallback coordinates');
                setMapView(3.1569, 101.7123, address);
                
                // Show a notice but keep the map visible
                const mapElement = document.getElementById('map');
                const noticeDiv = document.createElement('div');
                noticeDiv.className = 'map-notice';
                noticeDiv.innerHTML = 'Exact location not found. Showing approximate area.';
                noticeDiv.style.position = 'absolute';
                noticeDiv.style.bottom = '10px';
                noticeDiv.style.left = '10px';
                noticeDiv.style.backgroundColor = 'rgba(255,255,255,0.8)';
                noticeDiv.style.padding = '5px 10px';
                noticeDiv.style.borderRadius = '4px';
                noticeDiv.style.fontSize = '12px';
                noticeDiv.style.zIndex = '1000';
                mapElement.style.position = 'relative';
                mapElement.appendChild(noticeDiv);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            // Still show the map with default coordinates rather than an error message
            setMapView(3.1569, 101.7123, address);
        });
}

// Helper function to set map view and add marker
function setMapView(lat, lng, address) {
    // Update map view
    map.setView([lat, lng], 15);

    // Remove old marker if exists
    if (marker) {
        map.removeLayer(marker);
    }

    // Add new marker
    marker = L.marker([lat, lng]).addTo(map)
        .bindPopup(`<b>${address}</b>`)
        .openPopup();
}

// Get the back to top button
const backToTopButton = document.getElementById("backToTop");

// Show/hide the button based on scroll position
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
};

// Scroll to top when button is clicked
backToTopButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Add CSS animation
document.head.insertAdjacentHTML('beforeend', `
<style>
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}
</style>
`);