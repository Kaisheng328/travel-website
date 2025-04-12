document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const packageType = urlParams.get('package');

    const details = {
        'kuala-lumpur': {
            title: 'Kuala Lumpur',
            image: 'https://www.malaysia-china.com.my/wp-content/uploads/2022/02/kl-night-view_7.jpg',
            description: 'Explore Malaysia’s exciting capital! Visit the iconic Petronas Towers, shop at lively street markets, and enjoy the city’s unique blend of culture and modern life.',
            price: '1,099',
            discountPrice: '879',
            schedule: [
                {
                    day: '<strong>Day 1: Arrival & City Landmarks</strong> <br>Check in to your hotel, then explore the city famous landmarks. Visit the Petronas Twin Towers for an unforgettable skyline view.',
                    image: 'https://yamamatravel.net/wp-content/uploads/2024/10/n2sknqlcgr0-780x470.jpg'
                },
                {
                    day: '<strong>Day 2: Batu Caves Adventure & Shopping Spree</strong> <br>Climb the colorful steps of Batu Caves, then shop for great deals at Bukit Bintang, KL ultimate shopping and dining hub.',
                    image: 'https://cdn-imgix.headout.com/media/images/5a015523f20a7777a09f9a22756f88ab-3813-kuala-lumpur-batu-caves-01.jpg'
                },
                {
                    day: '<strong>Day 3: Wildlife & Departure</strong> <br>Get up close with exotic birds at KL Bird Park before checking out and heading to the airport.',
                    image: 'https://www.klbirdpark.com/wp-content/uploads/2023/08/Attraction.jpg'
                }
            ]
        },
        'langkawi': {
            title: 'Langkawi',
            image: 'https://themalayapost.my/wp-content/uploads/2023/11/a9ebceb6-4e24-48fb-9ad6-16572c9576aa.jpg',
            description: 'Relax in Langkawi! Enjoy soft beaches, clear blue seas, and amazing island views—perfect for your dream getaway.',
            price: '1,199',
            discountPrice: '959',
            schedule: [
                {
                    day: '<strong>Day 1: Arrival & Beachside Retreat</strong> <br>Check in to your seaside resort and unwind on Langkawi’s stunning beaches. Enjoy the breathtaking sunset by the shore.',
                    image: 'https://i.ytimg.com/vi/R4XX_9bZnj4/maxresdefault.jpg'
                },
                {
                    day: '<strong>Day 2: Snorkeling & Island Hopping</strong> <br>Dive into crystal-clear waters for an unforgettable snorkeling experience, then explore hidden gems on an island-hopping adventure.',
                    image: 'https://tripjive.com/wp-content/uploads/2023/12/Langkawi-diving-and-snorkeling.jpg'
                },
                {
                    day: '<strong>Day 3: Eagle Watching & Sky Bridge Thrill</strong> <br>Watch majestic eagles soar at Eagle Square, then take in breathtaking panoramic views from Langkawi’s famous Sky Bridge.',
                    image: 'https://www.langkawi.com/wp-content/uploads/2023/09/0b724670-06d5-11ea-b210-bbe08c617616_1573732267-large.jpg'
                },
                {
                    day: '<strong>Day 4: Shopping & Farewell</strong> <br>Pick up duty-free souvenirs and enjoy a relaxing morning at your resort before heading to the airport.',
                    image: 'https://tourteller.com/blog/wp-content/uploads/2023/07/Batik-Village-Langkawi.png'
                }

            ]
        },
        'penang': {
            title: 'Penang',
            image: 'https://i.ex-cdn.com/vntravellive.com/files/news/2023/10/13/den-thien-duong-bien-dao-penang-nen-di-nhung-dau-112140.jpg',
            description: 'Explore Penang’s rich culture and food! Taste delicious street food and stroll through the colorful streets of George Town.',
            price: '899',
            discountPrice: '719',
            schedule: [
                {
                    day: '<strong>Day 1: Arrival & Heritage Walk</strong> <br>Check in to your hotel and explore the vibrant streets of George Town, filled with colorful murals, historic sites, and delicious street food.',
                    image: 'https://silverkris.singaporeair.com/wp-content/uploads/2018/01/21924795462_8fb19f12ae_k.jpg'
                },
                {
                    day: '<strong>Day 2: Scenic Views & Beach Escape</strong> <br>Enjoy breathtaking views from Penang Hill, then relax on the golden sands of Batu Ferringhi Beach.',
                    image: 'https://news.usm.my/images/Malaysia-The-Habitat-Penang-Hill-4-Treetop-Walk3.jpg'
                },
                {
                    day: '<strong>Day 3: Adventure & Water Fun</strong> <br>Get your adrenaline pumping at Escape Penang, a thrilling outdoor theme park filled with exciting rides and water attractions.',
                    image: 'https://cdn-imgix.headout.com/tour/31736/TOUR-IMAGE/5eb821f5-05a4-4405-a941-73e158458f54-16800-penang-escape-penang-02.png?auto=format&w=900&h=562.5&q=90&fit=crop&ar=16%3A10'
                },
                {
                    day: '<strong>Day 4: Nature Exploration & Departure</strong> <br>Take a refreshing hike at Penang National Park before heading to the airport.',
                    image: 'https://mindofahitchhiker.com/wp-content/uploads/2020/07/k-Penang-national-park-meromictic-lake-turtle-beach-pantai-keracut-15-1024x769.jpg'
                }

            ]
        },
        'sabah': {
            title: 'Sabah',
            image: 'https://bimp-eaga.asia/sites/default/files/2024-02/iStock-153570866.jpg',
            description: 'Discover Sabah’s wild side! Climb majestic Mount Kinabalu, wander through green rainforests, and spot amazing animals up close.',
            price: '1,299',
            discountPrice: '1,039',
            schedule: [
                {
                    day: '<strong>Day 1: Arrival & Market Stroll</strong> <br>Check in to your hotel and explore Sabah’s lively local markets, filled with fresh seafood, unique crafts, and cultural delights.',
                    image: 'https://sabahtourism.com/assets/uploads/RS24082_Sabah-Malaysia-7151-lpr.jpg'
                },
                {
                    day: '<strong>Day 2: Mount Kinabalu & Nature Escape</strong> <br>Take a day trip to the majestic Mount Kinabalu, then immerse yourself in the beauty of Sabah’s lush nature reserves.',
                    image: 'https://cdn.bookatrekking.com/data/images/2020/02/shutterstock-586259927.webp'
                },
                {
                    day: '<strong>Day 3: Chocolate & Dairy Farm Delight</strong> <br>Indulge in local treats at KK Chocolate House before visiting Desa Dairy Farm for stunning mountain views and fresh dairy products.',
                    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/c1/3c/0c/cocoa-kingdom.jpg?w=1200&h=-1&s=1'
                },
                {
                    day: '<strong>Day 4: City Tour & Departure</strong> <br>Explore Kota Kinabalu’s top attractions before doing some last-minute shopping and heading to the airport.',
                    image: 'https://www.agoda.com/wp-content/uploads/2020/05/Scenic-photo-of-the-city-Kota-Kinabalu-Itinerary-Malaysia.jpg'
                }
            ]
        },
        'melaka': {
            title: 'Melaka',
            image: 'https://media.cntravellerme.com/photos/65d748e1141d7fa040c9767a/master/w_1600%2Cc_limit/1227193133',
            description: 'Step into the charm of Melaka! Explore colorful streets, see old Dutch and Portuguese buildings, and enjoy the city’s rich heritage.',
            price: '799',
            discountPrice: '639',
            schedule: [
                {
                    day: '<strong>Day 1: Arrival & Heritage Walk</strong> <br>Check in to your hotel and explore the historic Dutch Square, surrounded by charming red buildings and a lively atmosphere.',
                    image: 'https://www.holidaygogogo.com/wp-content/uploads/2013/04/Dutch-Square.jpg'
                },
                {
                    day: '<strong>Day 2: Historic Fort & Shopping</strong> <br>Visit the legendary A Famosa fortress, then stroll along Jonker Street for unique souvenirs and mouth-watering street food.',
                    image: 'https://static.wixstatic.com/media/716b5f_5735dc528bd94a83aca65b7d32d8941e~mv2.jpg/v1/fill/w_768,h_576,al_c,q_85/IMG20201107165151-768x576.jpg'
                },
                {
                    day: '<strong>Day 3: Scenic River Cruise</strong> <br>Relax on a peaceful Melaka River Cruise, passing by historic landmarks and vibrant murals along the waterway.',
                    image: 'https://image.kkday.com/v2/image/get/w_1900%2Cc_fit%2Cq_55/s1.kkday.com/product_103696/20210827105154_XA3rW/jpg'
                },
                {
                    day: '<strong>Day 4: Cultural Experience & Departure</strong> <br>Explore the Melaka Sultanate Palace Museum, then enjoy some final sightseeing before heading home.',
                    image: 'https://www.holidify.com/images/cmsuploads/compressed/800px-Malacca_Sultanate_Palace_Museum_1_20191205163111.jpg'
                }
            ]
        }
    };

    const package = details[packageType];


    if (package) {
        document.getElementById('package-details').innerHTML = `
<img src="${package.image}" alt="${package.title}">
<h2>${package.title}</h2>
<p>${package.description}</p>
<p class="package-price">Normal Price: RM${package.price}</p>
<p class="package-price discount-price" style="color: red; font-weight: bold; font-size: 1.5em;">
   Offer Price: RM${package.discountPrice} ! ! ! (Until 24-August-2025)
</p>
<div class="schedule">
   <h3>Schedule</h3>
   <ul>
       ${package.schedule.map(item => `
           <li>
               <img src="${item.image}" alt="${item.day}">
               <p>${item.day}</p>
           </li>
       `).join('')}
   </ul>
</div>
`;
    }

    function updateCountdown() {
        const now = new Date().getTime();
        const endTime = new Date('2025-08-24T00:00:00').getTime();
        const distance = endTime - now;

        if (distance < 0) {
            document.getElementById('countdown').innerHTML = 'Offer Expired';
            document.getElementById('discount-price').style.display = 'none';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerHTML = `
<span>${days}d</span> 
<span>${hours}h</span> 
<span>${minutes}m</span> 
<span>${seconds}s</span>
`;
    }


    function startCountdown() {
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }



    startCountdown();



});

// Get the back to top button
const backToTopButton = document.getElementById("backToTop");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
backToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scroll to top
    });
});


