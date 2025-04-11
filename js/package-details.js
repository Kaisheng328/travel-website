document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const packageType = urlParams.get('package');

const details = {
   'kuala-lumpur': {
       title: 'Kuala Lumpur',
       image: 'https://cdn.pixabay.com/photo/2013/08/09/05/58/kuala-lumpur-170985_1280.jpg',
       description: 'Explore the vibrant capital of Malaysia with its iconic Petronas Towers, bustling markets, and rich cultural heritage.',
       price: '1,099',
       discountPrice: '879',
       schedule: [
           {
               day: 'Day 1: Arrival in Kuala Lumpur, check-in to hotel, visit Petronas Towers.',
               image: 'https://images.unsplash.com/photo-1472017053394-b29fded587cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
           },
           {
               day: 'Day 2: Explore Batu Caves, shopping at Bukit Bintang.',
               image: 'https://media.istockphoto.com/id/1954508845/photo/hindu-statue-of-murugan-outside-batu-caves-kuala-lumpur-malaysia.jpg?s=2048x2048&w=is&k=20&c=bWH0AROmcR75eHASwhqWhLWbAkJX8RP8pHHt6pCPW1g='
           },
           {
               day: 'Day 3: Visit Kuala Lumpur Bird Park, departure.',
               image: 'https://afuncouple.com/wp-content/uploads/2023/08/KL-Bird-Park_Kuala-Lumpur_Malaysia-9.webp'
           }
       ]
   },
   'langkawi': {
       title: 'Langkawi',
       image: 'https://cdn.pixabay.com/photo/2018/03/18/16/51/nature-3237434_1280.jpg',
       description: 'Relax on the beautiful beaches of Langkawi, an island paradise known for its clear waters, luxury resorts, and stunning landscapes.',
       price: '1,199',
       discountPrice: '959',
       schedule: [
           {
               day: 'Day 1: Arrival in Langkawi, check-in to resort, relax on the beach.',
               image: 'https://www.shutterstock.com/image-photo/langkawi-island-malaysia-18-january-600nw-1846406953.jpg'
           },
           {
               day: 'Day 2: Snorkelling and Island hopping tour.',
               image: 'https://img.traveltriangle.com/blog/wp-content/uploads/2020/02/cover-Snorkeling-In-Langkawi.jpg'
           },
           {
               day: 'Day 3: Eagle watching, visit Langkawi Sky Bridge.',
               image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/39/b3/a7.jpg'
           },
           {
               day: 'Day 4: Shopping and relax at the resort, departure.',
               image: 'https://www.holidify.com/images/cmsuploads/compressed/shopping-in-Langkawi-feature-image-1021x550_20200116192724.png'
           }
       ]
   },
   'penang': {
       title: 'Penang',
       image: 'https://cdn.pixabay.com/photo/2019/08/17/07/38/georgetown-4411602_1280.jpg',
       description: 'Discover the cultural and culinary delights of Penang, from its famous street food to its UNESCO World Heritage-listed George Town.',
       price: '899',
       discountPrice: '719',
       schedule: [
           {
               day: 'Day 1: Arrival in Penang, check-in to hotel, explore George Town.',
               image: 'https://www.tripsavvy.com/thmb/6M8JAjoAmEdgU3y5sVhfncBXsKw=/4500x2531/filters:no_upscale():max_bytes(150000):strip_icc()/little-india-georgetown-penang-08d3e2bbb556432ab7f3837fdc5eb28f.jpg'
           },
           {
               day: 'Day 2: Visit Penang Hill, Batu Ferringhi beach.',
               image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/9f/50/54/view-from-the-train-to.jpg?w=1200&h=1200&s=1'
           },
           {
               day: 'Day 3: Explore Escape Penang.',
               image: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit1600900gsm/eventThirdParty/2021/09/29/2f95e111-2a99-444c-a31e-4dd35ebd3d7f-1632852975854-911927d32c47880258b41d55f51b410e.jpg'
           },
           {
               day: 'Day 4: Explore Penang National Park, departure.',
               image: 'https://nationalparks-15bc7.kxcdn.com/images/parks/penang/Penang%20National%20Park%20hikers.jpg'
           }
       ]
   },
   'sabah': {
       title: 'Sabah',
       image: 'https://cdn.pixabay.com/photo/2020/07/11/03/46/sabah-5392664_1280.jpg',
       description: 'Embark on an adventure in Sabah, home to Mount Kinabalu, lush rainforests, and incredible wildlife.',
       price: '1,299',
       discountPrice: '1,039',
       schedule: [
           {
               day: 'Day 1: Arrival in Sabah, check-in, visit local markets.',
               image: 'https://sabahtourism.com/assets/uploads/IMG_4726-2.jpg'
           },
           {
               day: 'Day 2: Mount Kinabalu day trip, explore nature reserves.',
               image: 'https://borneocalling.com/wp-content/uploads/2018/11/Mount-Kinabalu-Sabah.jpg'
           },
           {
               day: 'Day 3: Visit KK Chocolate House and Desa Dairy Farm.',
               image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM8wpSLFm_jHICcDZG_wwclIWBNNj61x710w&s'
           },
           {
               day: 'Day 4: KK City tour & Shopping at selected locations, departure.',
               image: 'https://global-goose.com/wp-content/uploads/2014/01/1-DSC_0622.jpg'
           }
       ]
   },
   'melaka': {
       title: 'Melaka',
       image: 'https://cdn.pixabay.com/photo/2015/09/25/10/04/dutch-square-957004_1280.jpg',
       description: 'Explore the historical city of Melaka, known for its colonial architecture, vibrant street life, and rich heritage.',
       price: '799',
       discountPrice: '639',
       schedule: [
           {
               day: 'Day 1: Arrival in Melaka, check-in, explore Dutch Square.',
               image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/27/c0/92/red-square-dutch-square.jpg?w=1200&h=-1&s=1'
           },
           {
               day: 'Day 2: Visit A Famosa, Jonker Street.',
               image: 'https://mkzjm.cdn.setuix.net/assets/asset/bWFpbi9ibG9nL2EtZmFtb3NhLXN0LXBhdWwtaGlsbC9zdHBhdWwtaGlsbC0wNC5qcGc=?w=300&h=150&fit=crop'
           },
           {
               day: 'Day 3: Explore Melaka River Cruise.',
               image: 'https://media1.thrillophilia.com/filestore/txldkyzwaewdd9mqhvs7vhwowd4k_1579701183_Melaka_River.jpg'
           },
           {
               day: 'Day 4: Visit Melaka Sultanate Palace, departure.',
               image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdQkuu3uP3ikQghSm2edr47KS6uPJtGypuRw&s'
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
