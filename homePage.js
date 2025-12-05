document.body.appendChild(Object.assign(document.createElement('img'), {id: 'logo', src: 'logo.png'}));


// Create header
const header = document.createElement('header');
header.textContent = "";
document.body.appendChild(header);

// Create address section
const addressHeading = document.createElement('h3');
addressHeading.textContent = '';
document.body.appendChild(addressHeading);
  
// Create the heading element

const addressText = document.createElement('h1');
addressText.id = 'address-text';

// Create the anchor element
const mapLink = document.createElement('a');
mapLink.href = 'https://www.google.com/maps/search/?api=1&query=5795+Grizzly+Bluff+Road+Ferndale+California';
mapLink.textContent = '5795 Grizzly Bluff Road Ferndale California';
mapLink.target = '_blank'; // Opens in a new tab

// Append the link to the heading
addressText.appendChild(mapLink);

// Append the heading to the body
document.body.appendChild(addressText);

const hoursText = document.createElement('h1');
hoursText.id = 'address-text';

const timeElement = document.createElement('time');
timeElement.dateTime = '2025-11-29T08:00:00'; // Machine-readable format for the opening date and time
timeElement.textContent = 'Open the day after Thanksgiving, daily 8am - 5pm';

hoursText.appendChild(timeElement);
document.body.appendChild(hoursText);

const PhoneNumHeading = document.createElement('h3');
PhoneNumHeading.textContent = '';
document.body.appendChild(PhoneNumHeading);
const PhoneNumText = document.createElement('h1');
PhoneNumText.id = 'address-text';
PhoneNumText.textContent = '(707) 834-6485';
document.body.appendChild(PhoneNumText);

// Create main content wrapper
const mainContent = document.createElement('div');
mainContent.className = 'main-content';
document.body.appendChild(mainContent);

// Add paragraph 1 (centered, above carousels)
const para1 = document.createElement('p');
para1.id = 'intro';
para1.className = 'center-text';
para1.textContent = "Nestled in the scenic hills of Honeydew, California, Roy's Christmas Trees has grown premium " +
  "Silvertip (Red Fir) trees since 1982. Founded and run by Roy Forcier, our small, family-run tree farm specializes " +
  "in stump-cultured trees. We also plant tree seedlings ensuring a sustainable and naturally beautiful selection for your holiday celebrations.";
mainContent.appendChild(para1);

// ========== FIRST CAROUSEL (Left Side) ==========

// Create carousels row
const carouselRow = document.createElement('div');
carouselRow.className = 'carousel-row';
mainContent.appendChild(carouselRow);

// Create first carousel container
const carousel1Container = document.createElement('div');
carousel1Container.className = 'carousel-container left';

// Create first carousel
const carousel1 = document.createElement('div');
carousel1.className = 'carousel';

const imageData1 = [
  { src: 'RoyAtFarm.jpg', id: 'roy-farm'},
  { src: 'Tree.jpg', id: 'tree' },
  { src: 'RoyWithBigTree.jpg', id: 'BigTree' },
  { src: 'BigTree.jpg'},
  { src: 'TreeTrees.jpg'},
  { src: 'WideTree.jpg'}
];

const carousel1Images = [];

imageData1.forEach(data => {
  // Create a slide container for each image
  const slide = document.createElement('div');
  slide.className = 'carousel-slide';
  
  const img = document.createElement('img');
  img.src = data.src;
  img.id = data.id;
  
  slide.appendChild(img);
  carousel1.appendChild(slide);
  carousel1Images.push(slide);
});

// Create carousel controls for first carousel
const controls1 = document.createElement('div');
controls1.className = 'carousel-controls';

const prevBtn1 = document.createElement('button');
prevBtn1.className = 'carousel-btn prev-btn';
prevBtn1.textContent = '<';
prevBtn1.style.color = '#808080';


const nextBtn1 = document.createElement('button');
nextBtn1.className = 'carousel-btn next-btn';
nextBtn1.textContent = '>';
nextBtn1.style.color = '#808080';


controls1.appendChild(prevBtn1);
controls1.appendChild(nextBtn1);

// Create text content
const leftText = document.createElement('div');
leftText.className = 'carouselText';

const para2 = document.createElement('p');
para2.id = 'what-you-can-get';
para2.textContent = "Each season, we bring our freshly harvested trees to 5795 Grizzly Bluff Road in Ferndale, " +
  "California, in the heart of the Ferndale Bottoms. Alongside our trees, we offer handmade fresh Christmas wreaths, " +
  "crafted with care by Elizabeth Forcier, bringing the fragrance and charm of the season to your home.";

leftText.appendChild(para2);

// Assemble components in the correct order
carousel1Container.appendChild(carousel1);
carousel1Container.appendChild(controls1);
carousel1Container.appendChild(leftText);

// Add carousel container to the parent element
carouselRow.appendChild(carousel1Container);



// ========== SECOND CAROUSEL (Right Side) ==========
// Create second carousel container


// ========== SECOND CAROUSEL (Right Side) ==========
// Create second carousel container
const carousel2Container = document.createElement('div');
carousel2Container.className = 'carousel-container right';

// Create second carousel
const carousel2 = document.createElement('div');
carousel2.className = 'carousel';

// Create and add images to second carousel
const imageData2 = [
  { src: 'Ornaments.jpg', id: 'ornaments'},
  { src: 'WreathWithCandle.jpg', id: 'wreath-candle'},
  { src: 'Wreath.jpg', id: 'wreath'}
];

const carousel2Images = [];

imageData2.forEach(data => {
  // Create a slide container for each image
  const slide = document.createElement('div');
  slide.className = 'carousel-slide';
  
  const img = document.createElement('img');
  img.src = data.src;
  img.id = data.id;
  
  slide.appendChild(img);
  carousel2.appendChild(slide);
  carousel2Images.push(slide);
});

// Create carousel controls for second carousel
const controls2 = document.createElement('div');
controls2.className = 'carousel-controls';

const prevBtn2 = document.createElement('button');
prevBtn2.className = 'carousel-btn prev-btn';
prevBtn2.textContent = '<';
prevBtn2.style.color = '#808080';

const nextBtn2 = document.createElement('button');
nextBtn2.className = 'carousel-btn next-btn';
nextBtn2.textContent = '>';
nextBtn2.style.color = '#808080';

controls2.appendChild(prevBtn2);
controls2.appendChild(nextBtn2);

// Create text content for right carousel
const rightText = document.createElement('div');
rightText.className = 'carouselText';

const para3 = document.createElement('p');
para3.id = 'shop-info';
para3.textContent = "While selecting your tree, step into our Ornament and Wreath shop, housed in the vestibule " +
  "of a beautifully converted Presbyterian church , where you'll find unique holiday treasures to complement your festivities.";

rightText.appendChild(para3);

// Assemble components in the correct order
carousel2Container.appendChild(carousel2);
carousel2Container.appendChild(controls2);
carousel2Container.appendChild(rightText);

// Add second carousel container to the parent element
carouselRow.appendChild(carousel2Container);

// Second carousel functionality
let currentIndex2 = 0;

// ===================== para4 ================

const para4 = document.createElement('h2');
para4.id = 'buy';
para4.className = 'center-text';
para4.textContent = "For a tree with history, heart, and Humboldt-grown tradition, visit Roy's Christmas Trees.";
mainContent.appendChild(para4);

// --- CUSTOMER REVIEW ---

const reviewSection = document.createElement('div');
reviewSection.className = 'customer-review-section';

const reviewHeading = document.createElement('h2');
reviewHeading.textContent = 'What Our Customers Say:';
reviewSection.appendChild(reviewHeading);

// Create the customerQuote first
const customerQuote = document.createElement('blockquote');
customerQuote.className = 'customer-quote';
customerQuote.textContent = "“Choosing our tree from Roy's is a family tradition. They always have very nice trees that complete the holidays” -River";

// Append the customerQuote to the reviewSection BEFORE the image container
reviewSection.appendChild(customerQuote); // <--- HERE IT IS, ABOVE THE IMAGE

// Now create and append the image container
const reviewImageContainer = document.createElement('div');
reviewImageContainer.className = 'review-image-container';

const customerReviewImage = document.createElement('img');
customerReviewImage.src = 'customer.jpg';
customerReviewImage.alt = 'Customer review image.'; // Alt text remains
customerReviewImage.className = 'customer-review-image';
reviewImageContainer.appendChild(customerReviewImage);

// Append the image container to the reviewSection
reviewSection.appendChild(reviewImageContainer);

mainContent.appendChild(reviewSection);

// ========== CAROUSEL FUNCTIONALITY ==========

// First carousel functionality
let currentIndex1 = 0;

function updateCarousel1() {
  // Remove active-slide from all slides first
  carousel1Images.forEach(slide => slide.classList.remove('active-slide'));
  // Add active-slide to the current one
  carousel1Images[currentIndex1].classList.add('active-slide');

  // Existing transform logic
  carousel1.style.transform = `translateX(-${currentIndex1 * 100}%)`;
}

nextBtn1.addEventListener('click', () => {
  if (currentIndex1 < carousel1Images.length - 1) {
    currentIndex1++;
  } else {
    currentIndex1 = 0;
  }
  updateCarousel1();
});

prevBtn1.addEventListener('click', () => {
  if (currentIndex1 > 0) {
    currentIndex1--;
  } else {
    currentIndex1 = carousel1Images.length - 1;
  }
  updateCarousel1();
});

function updateCarousel2() {
  // Remove active-slide from all slides first
  carousel2Images.forEach(slide => slide.classList.remove('active-slide'));
  // Add active-slide to the current one
  carousel2Images[currentIndex2].classList.add('active-slide');

  // Existing transform logic
  carousel2.style.transform = `translateX(-${currentIndex2 * 100}%)`;
}

nextBtn2.addEventListener('click', () => {
  if (currentIndex2 < carousel2Images.length - 1) {
    currentIndex2++;
  } else {
    currentIndex2 = 0;
  }
  updateCarousel2();
});

prevBtn2.addEventListener('click', () => {
  if (currentIndex2 > 0) {
    currentIndex2--;
  } else {
    currentIndex2 = carousel2Images.length - 1;
  }
  updateCarousel2();
});

// Auto-advance both carousels with a slight delay
setInterval(() => {
  // Increment both indexes and wrap around when reaching the end
  currentIndex1 = (currentIndex1 + 1) % carousel1Images.length;
  currentIndex2 = (currentIndex2 + 1) % carousel2Images.length;
  
  // Update both carousels
  updateCarousel1();
  updateCarousel2();
}, 5500);

const addressImage = document.createElement('img');
addressImage.src = 'Address.png';
addressImage.id = 'address-image';

// Create another anchor element for the image
const imageLink = document.createElement('a');
imageLink.href = 'https://www.google.com/maps/search/?api=1&query=5795+Grizzly+Bluff+Road+Ferndale+California';
imageLink.target = '_blank'; // Opens in a new tab

// Append the image to the image link
imageLink.appendChild(addressImage);

// Append the image link to the body
document.body.appendChild(imageLink);

document.addEventListener('DOMContentLoaded', () => {
  // ... your existing JS code setup ...
  updateCarousel1(); // Call to apply border to the first slide
  updateCarousel2(); // Call to apply border to the first slide
});