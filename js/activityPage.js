
/* ---------------------- Activities List ---------------------- */
const activities = [
    {
        name: "Petronas Twin Tower",
        category: ["City Excitement", "Restaurant"],
        description: "The Petronas Twin Towers in Kuala Lumpur, completed in 1998, are 452 meters tall and were the world’s tallest buildings until 2004.",
        imageUrl: "https://img.veenaworld.com/wp-content/uploads/2021/09/Petronas-Twin-Tower-Malaysia-Timing-Location-and-Things-to-Do-scaled.jpg",
        ratings: 4.8,
        favorite: false,
        longDescription: "The Petronas Twin Towers, located in Kuala Lumpur, Malaysia, are iconic skyscrapers known for their striking design and height. Completed in 1998, they were the tallest buildings in the world until 2004. Each tower stands at 452 meters (1,483 feet) tall and has 88 floors above ground. Designed by architect César Pelli, the towers feature a distinctive postmodern style with Islamic art influences, reflecting Malaysia's culture. They are connected by a skybridge at the 41st and 42nd floors, which allows for breathtaking views of the city. The Petronas Twin Towers are a major landmark and symbol of Malaysia's economic development.",
        OperatingHour: {
            0: '09:00-17:00', // Sunday
            1: '09:00-17:00', // Monday
            2: '09:00-17:00', // Tuesday
            3: '09:00-17:00', // Wednesday
            4: '09:00-17:00', // Thursday
            5: '09:00-17:00', // Friday
            6: '09:00-14:00'  // Saturday
        },
        video: "https://www.youtube.com/watch?v=p9jSKslwZWo",
        address: "Petronas Twin Tower, 405, Persiaran Petronas, Kuala Lumpur City Centre, 50088 Kuala Lumpur, Federal Territory of Kuala Lumpur",
        moreImages: [
            "https://images.fineartamerica.com/images-medium-large-5/1-twin-towers-petronas-kuala-lumpur-malaysia-at-night-dray-van-beeck.jpg",
            "https://www.malaysia.travel/mt-flmngr/files/Petronas-Twin-Tower/Petronas-twin-towers-mall3.jpg",
            "https://www.malaysia.travel/articles/experiential/images/klcc/hero/hero_banner3.jpg",
            "https://www.freeguider.com/upload/venues/1808/big/fa6541ba94bcf099d3bca46b32d1bb39.jpg"
        ]
    },
    {
        name: "Batu Caves",
        category: ["Cultural", "Nature"],
        description: "Batu Caves are limestone caves near Kuala Lumpur with Hindu temples and a giant statue of Lord Murugan.",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Batu_Caves_stairs_2022-05.jpg",
        ratings: 3.8,
        favorite: false,
        longDescription: "Batu Caves, located about 11 kilometers north of Kuala Lumpur, Malaysia, is a renowned limestone cave complex and a significant Hindu pilgrimage site. The site consists of a series of caves nestled within a 400-million-year-old limestone hill. The main attraction is the Temple Cave, which houses several Hindu shrines and is reached by a steep flight of 272 colorful steps. The site is also notable for the massive 42.7-meter-tall statue of Lord Murugan, a revered Hindu deity, which stands at the base of the hill. Batu Caves is a vibrant cultural and religious landmark, attracting both tourists and devotees throughout the year.",
        OperatingHour: {
            0: '09:00-17:00', 
            1: '09:00-17:00', 
            2: '09:00-17:00', 
            3: '09:00-17:00', 
            4: '09:00-17:00', 
            5: '09:00-17:00', 
            6: '09:00-14:00'  
        },
        video: "https://www.youtube.com/watch?v=455ZG1naoYk",
        address: "Gombak, 68100 Batu Caves, Selangor",
        moreImages: [
            "https://static.toiimg.com/img/96385080/Master.jpg",
            "https://walkovertheworld.com/wp-content/uploads/2023/01/13-Batu-Caves_1988-1.jpg",
            "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/473000/473096-Batu.jpg"
        ]
    },
    {
        name: "Legoland",
        category: ["Theme Park", "Relaxation"],
        description: "A theme park chain featuring rides and interactive experiences built around Lego bricks, aimed at families and children.",
        imageUrl: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/71/27/4a.jpg",
        ratings: 4.6,
        favorite: false,
        longDescription: "Legoland is a chain of theme parks designed around the popular Lego brand, catering primarily to families and children. The parks, located in various countries around the world, offer a wide range of attractions, including interactive rides, themed areas, and elaborate Lego displays. Visitors can explore miniature models of famous landmarks built from Lego bricks, engage in hands-on building activities, and enjoy a variety of themed rides and shows. Each Legoland park features unique attractions but maintains a focus on creativity, play, and education through immersive Lego-themed environments. The parks are designed to provide an engaging experience for children while offering entertainment and relaxation for adults.",
        OperatingHour: {
            0: '09:00-17:00',
            1: '09:00-17:00', 
            2: '09:00-17:00', 
            3: '09:00-17:00', 
            4: '09:00-17:00', 
            5: '09:00-17:00', 
            6: '09:00-14:00'  
        },
        video: "https://www.youtube.com/watch?v=lBAuXWFThms",
        address: "7, Persiaran Medini Utara 3, 79100 Iskandar Puteri, Johor",
        moreImages: [
            "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/75/b8/29.jpg",
            "https://themalaysianreserve.com/wp-content/uploads/2022/08/Legoland.jpg",
            "https://www.legoland.com/florida/media/mpcgms3w/legoland-hotel-florida-outside-2023-3x2-0-4mb.jpg"
        ]
    },
    {
        name: "KL Tower 360",
        category: ["Restaurant"],
        description: "A revolving dining restaurant, offering panoramic views while serving a range of international and local cuisine.",
        imageUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/71/3e/52.jpg",
        ratings: 4.9,
        favorite: false,
        longDescription: "KL Tower Restaurant 360 is a unique dining experience situated at the top of the Kuala Lumpur Tower (Menara Kuala Lumpur), one of the tallest telecommunications towers in the world. Located 282 meters above ground, the restaurant features a revolving floor that provides diners with panoramic, 360-degree views of Kuala Lumpur and its surroundings. The restaurant offers a diverse buffet, including international and local dishes, allowing guests to enjoy a wide range of cuisines while experiencing the breathtaking vistas. With its elegant ambiance and rotating dining area, KL Tower Restaurant 360 provides a memorable and immersive dining experience, combining exceptional food with spectacular views of the cityscape.",
        OperatingHour: {
            0: '09:00-17:00', 
            1: '09:00-17:00', 
            2: '09:00-17:00', 
            3: '09:00-17:00', 
            4: '09:00-17:00', 
            5: '09:00-17:00', 
            6: '09:00-14:00'  
        },
        video: "https://www.youtube.com/watch?v=IEPGke1NK8U",
        address: "2 Jalan Punchak, Off, Jalan P. Ramlee, 50250 Kuala Lumpur",
        moreImages: [
            "https://cdn-imgix.headout.com/media/images/7a831af41cacc0703edb51d00af91465-3.jpg?w=744&h=465&crop=faces&auto=compress%2Cformat&fit=min",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9sLcnP5ntjz3mKvC3iKqk01_DpvJumslL0xOkkkVqsgshSMXo0B35zRIXhjQW6ep56hqj0LJPO9nmJidQbga5-X5W_4eteY8pBjpketvdOVAtnETENQmTNEnKJnr8l0PkSxDVSy2Qlg0/s640/00+.jpg",
            "https://res.klook.com/image/upload/c_fill,w_750,h_500/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/abchlbp1cgbpstp3ltxx.jpg"
        ]
    },
    {
        name: "Cameron Highlands",
        category: ["Nature", "Relaxation"],
        description: "Cameron Highlands is a cool, scenic hill station in Malaysia known for its tea plantations, strawberry farms, and lush landscapes.",
        imageUrl: "https://www.selectiveasia.com/media/v2/800x600/4000-3000_0_0_0/7328.jpg",
        ratings: 2.2,
        favorite: false,
        longDescription: "Cameron Highlands is a picturesque hill station located in the central region of Malaysia, renowned for its lush greenery, cool climate, and agricultural activities. Situated at an altitude of about 1,500 to 1,800 meters above sea level, the highlands offer a refreshing escape from the tropical heat. The area is famous for its extensive tea plantations, where visitors can tour tea factories and enjoy scenic views of the rolling hills covered in tea bushes. Additionally, Cameron Highlands is known for its strawberry farms, flower gardens, and vegetable farms. The region's cool weather makes it ideal for outdoor activities such as hiking and exploring the natural beauty of its rainforests, waterfalls, and mossy forests. With charming towns like Tanah Rata and Brinchang, Cameron Highlands provides a blend of natural beauty and cultural experiences, making it a popular destination for both relaxation and exploration.",
        OperatingHour: {
            0: '09:00-17:00', 
            1: '09:00-17:00', 
            2: '09:00-17:00', 
            3: '09:00-17:00', 
            4: '09:00-17:00', 
            5: '09:00-17:00', 
            6: '09:00-14:00'  
        },
        video: "https://www.youtube.com/watch?v=E4FfofyMQl0",
        address: "Cameron Highlands, 39000, Pahang",
        moreImages: [
            "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2024/04/22160131/cameron-highlands-flora-park-1600x900.jpeg",
            "https://www.startravel.com.my/wp-content/uploads/2023/05/exterior-1.jpg",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/e7/83/f3/lakeview-terrace-night.jpg?w=700&h=-1&s=1"
        ]
    },
    {
        name: "KLCC Park",
        category: ["Relaxation", "Nature"],
        description: "A beautifully landscaped urban park in Kuala Lumpur, located at the base of the Petronas Twin Towers, featuring lush greenery, a large lake, walking paths, and a water fountain display.",
        imageUrl: "https://2.bp.blogspot.com/-G7MYntNYMd4/WYBIi9rJxUI/AAAAAAAAal4/WRWMD3E1PpYAxxLZtF5DC8lHW-7I6x-bgCLcBGAs/s1600/Klcc-Park-40607.jpg",
        ratings: 1.9,
        favorite: false,
        longDescription: "KLCC Park is a well-designed urban green space situated at the base of the Petronas Twin Towers in Kuala Lumpur, Malaysia. Spanning 50 acres, the park offers a serene retreat from the bustling city with its lush gardens, walking paths, and expansive lawns. Central to the park is a large artificial lake that features a musical fountain, providing a stunning water display set to music, especially in the evenings. The park includes various amenities such as a children’s playground, a jogging track, and shaded areas for relaxation. Visitors can also enjoy the park's meticulously landscaped gardens, which include a tropical rainforest area and a wide variety of plants and flowers. KLCC Park serves as a popular recreational spot for both locals and tourists, offering picturesque views of the iconic Petronas Twin Towers and a peaceful environment for leisurely strolls and outdoor activities.",
        OperatingHour: {
            0: '09:00-17:00', 
            1: '09:00-17:00', 
            2: '09:00-17:00', 
            3: '09:00-17:00', 
            4: '09:00-17:00', 
            5: '09:00-17:00', 
            6: '09:00-14:00'  
        },
        video: "https://www.youtube.com/watch?v=XA0cXEHhpL0",
        address: "KLCC, Lot No. 241, Level 2, Suria, Kuala Lumpur City Centre, 50088 Kuala Lumpur",
        moreImages: [
            "https://www.suriaklcc.com.my/wp-content/uploads/2022/01/KLCC-Park-900x600-1.jpg",
            "https://www.malaysia.travel/mt-flmngr/files/KL-Best-Park/park-in-city-klcc-2.jpg",
            "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/473000/473061-Chow-Kit.jpg"
        ]
    }
];

// Check if activities are already stored
if (!localStorage.getItem('activities')) {
    localStorage.setItem('activities', JSON.stringify(activities));
}

// Loading Activities from Local Storage and Displaying Them
const storedActivities = JSON.parse(localStorage.getItem('activities'));

// Function to create activity card HTML
function createActivityCard(activity) {
    const categories = activity.category.join(" • ");
    const heartIconClass = activity.favorite ? 'bi-heart-fill' : 'bi-heart';
    const selectedClass = activity.favorite ? 'selected' : '';

    return `
        <div class="activity-card">
            <span class="love-icon ${selectedClass}">
                <i class="bi ${heartIconClass}"></i> 
            </span>
            <img src="${activity.imageUrl}" alt="${activity.name}" class="activity-image">
            <div class="activity-details">
                <h3 class="activity-name">${activity.name}</h3>
                <p class="activity-category">${categories}</p>
                <p class="activity-description">${activity.description}</p>
                <div class="activity-ratings">
                    <span class="ratings">⭐</span>${activity.ratings}
                    <a href="detailPage.html?name=${encodeURIComponent(activity.name)}" class="explore-button">Explore</a>
                </div>
            </div>
        </div>
    `;
}

// Function to display activities on the page
function displayActivities(activities) {
    const activitiesSection = document.querySelector('.activities-section');
    activitiesSection.innerHTML = '<h4>Activities</h4>'; 
    activitiesSection.innerHTML += activities.map(activity => createActivityCard(activity)).join('');
    
    document.querySelectorAll('.activity-card').forEach(card => {
        observer.observe(card);
    });

    attachLoveIconListeners();
}

// Function to attach event listeners to love icons
function attachLoveIconListeners() {
    document.querySelectorAll('.love-icon').forEach(icon => {
        const activityName = icon.parentElement.querySelector('.activity-name').textContent;
        const storedActivities = JSON.parse(localStorage.getItem('activities'));
        const activity = storedActivities.find(activity => activity.name === activityName);
        
        if (activity.favorite) {
            icon.classList.add('selected');
            icon.querySelector('i').classList.add('bi-heart-fill');
            icon.querySelector('i').classList.remove('bi-heart');
        } else {
            icon.classList.remove('selected');
            icon.querySelector('i').classList.add('bi-heart');
            icon.querySelector('i').classList.remove('bi-heart-fill');
        }


        icon.addEventListener('click', function(event) {
            // Check if the user is logged in by checking if 'username' exists in localStorage
            const username = localStorage.getItem('username');

            if (!username) {
                // If not logged in, show the sign-in modal and exit the function
                document.getElementById('signInModal').style.display = 'block';
                return;
            }

            // Toggle the favorite status
            icon.classList.toggle('selected');
            icon.querySelector('i').classList.toggle('bi-heart-fill');
            icon.querySelector('i').classList.toggle('bi-heart');

            const storedActivities2 = JSON.parse(localStorage.getItem('activities'));
            const activity2 = storedActivities2.find(activity => activity.name === activityName);
            activity2.favorite = !activity2.favorite;
            localStorage.setItem('activities', JSON.stringify(storedActivities2));
        });
    });
}

function applyFilters() {
    const selectedCategories = Array.from(document.querySelectorAll('#categoryFilter .btn.chip.active')).map(chip => chip.textContent.trim());
    const selectedRating = document.querySelector('input[name="travelerRating"]:checked')?.value;

    let filteredActivities = storedActivities;

    if (selectedCategories.length > 0) {
        filteredActivities = filteredActivities.filter(activity =>
            activity.category.some(category => selectedCategories.includes(category))
        );
    }

    if (selectedRating) {
        const ratingThresholds = {
            1: 4.0,
            2: 3.0,
            3: 2.0,
            4: 0
        };
        const minRating = ratingThresholds[selectedRating];
        filteredActivities = filteredActivities.filter(activity => activity.ratings >= minRating);
    }

    displayActivities(filteredActivities);
}

/*-----------------------for activity card animation--------------------------*/
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.remove('hidden');
        } else {
            entry.target.classList.remove('visible');
            entry.target.classList.add('hidden');
        }
    });
}
const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.05 
});

// Observe each activity card
document.querySelectorAll('.activity-card').forEach(card => {
    observer.observe(card);
});

// Initial loading of activities
displayActivities(storedActivities);

/* ---------------------- Other button/icon function ---------------------- */

document.querySelectorAll('.btn.chip').forEach(function(chip) {
    chip.addEventListener('click', function() {
        chip.classList.toggle('active');
        applyFilters();  
    });
});

document.querySelectorAll('input[name="travelerRating"]').forEach(function(radio) {
    radio.addEventListener('change', applyFilters); 
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
//activity card animation
document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('.activity-card').forEach(card => {
        observer.observe(card);
    });
});

//Redirect to selected filter using parameter
document.addEventListener('DOMContentLoaded', () => {
    // Get the query parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const filterCategory = urlParams.get('category');

    if (filterCategory) {
        // Find the button with the specified category and simulate a click
        const filterButton = document.querySelector(`button[data-category="${filterCategory}"]`);
        
        if (filterButton) {
            console.log("Filter button exists with data-category:", filterButton.getAttribute('data-category'));
            filterButton.click(); // Simulate a click to apply the filter
        } else {
            console.log("No button found with category:", filterCategory);
        }
    }
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