document.body.appendChild(Object.assign(document.createElement('img'), {id: 'logo', src: 'SVGLogo.jpg'}));


  // Create header
  const header = document.createElement('header');
  header.textContent = "";
  document.body.appendChild(header);
  
  // Create address section
  const addressHeading = document.createElement('h3');
  addressHeading.textContent = 'Address';
  document.body.appendChild(addressHeading);
  
  const addressText = document.createElement('p');
  addressText.id = 'address-text';
  addressText.textContent = '5795 Grizzly Bluff Road in Ferndale, California';
  document.body.appendChild(addressText);
  
  // Create main content wrapper
  const mainContent = document.createElement('div');
  mainContent.className = 'main-content';
  document.body.appendChild(mainContent);
  
  // Add paragraph 1 (centered, above carousels)
  const para1 = document.createElement('p');
  para1.id = 'intro';
  para1.className = 'center-text';
  para1.textContent = "Nestled in the scenic hills of Honeydew, California, Roy's Christmas Trees has grown premium Silvertip (Red Fir) trees since 1982. Founded and run by Roy Forcier, our small, family-run tree farm specializes in stump-cultured trees. We also plant tree seedlings ensuring a sustainable and naturally beautiful selection for your holiday celebrations.";
  mainContent.appendChild(para1);
  
  // Create carousels row
  const carouselRow = document.createElement('div');
  carouselRow.className = 'carousel-row';
  mainContent.appendChild(carouselRow);
  
  // ========== FIRST CAROUSEL (Left Side) ==========
  // Create first carousel container
  const carousel1Container = document.createElement('div');
  carousel1Container.className = 'carousel-container left';
  carouselRow.appendChild(carousel1Container);
  
  // Create first carousel
  const carousel1 = document.createElement('div');
  carousel1.className = 'carousel';
  
  // Create and add images to first carousel
  const imageData1 = [
    { src: 'RoyAtFarm.jpg', id: 'roy-farm', alt: 'Roy at the Farm' },
    { src: 'Tree.jpg', id: 'tree', alt: 'Christmas Tree' }
  ];
  
  const carousel1Images = [];
  
  imageData1.forEach(data => {
    // Create a slide container for each image
    const slide = document.createElement('div');
    slide.className = 'carousel-slide';
    
    const img = document.createElement('img');
    img.src = data.src;
    img.id = data.id;
    img.alt = data.alt;
    
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
  
  const nextBtn1 = document.createElement('button');
  nextBtn1.className = 'carousel-btn next-btn';
  nextBtn1.textContent = '>';
  
  controls1.appendChild(prevBtn1);
  controls1.appendChild(nextBtn1);
  
  // Create carousel indicators for first carousel
  const indicators1 = document.createElement('div');
  indicators1.className = 'carousel-indicators';
  
  const indicatorElements1 = [];
  
  for (let i = 0; i < imageData1.length; i++) {
    const indicator = document.createElement('span');
    indicator.className = i === 0 ? 'indicator active' : 'indicator';
    indicator.dataset.index = i;
    indicators1.appendChild(indicator);
    indicatorElements1.push(indicator);
  }
  
  // Assemble first carousel
  carousel1Container.appendChild(carousel1);
  carousel1Container.appendChild(controls1);
  carousel1Container.appendChild(indicators1);
  
  // ========== SECOND CAROUSEL (Right Side) ==========
  // Create second carousel container
  const carousel2Container = document.createElement('div');
  carousel2Container.className = 'carousel-container right';
  carouselRow.appendChild(carousel2Container);
  
  // Create second carousel
  const carousel2 = document.createElement('div');
  carousel2.className = 'carousel';
  
  // Create and add images to second carousel
  const imageData2 = [
    { src: 'Ornaments.jpg', id: 'ornaments', alt: 'Christmas Ornaments' },
    { src: 'WreathWithCandle.jpg', id: 'wreath-candle', alt: 'Wreath With Candle' },
    { src: 'Wreath.jpg', id: 'wreath', alt: 'Christmas Wreath' }
  ];
  
  const carousel2Images = [];
  
  imageData2.forEach(data => {
    // Create a slide container for each image
    const slide = document.createElement('div');
    slide.className = 'carousel-slide';
    
    const img = document.createElement('img');
    img.src = data.src;
    img.id = data.id;
    img.alt = data.alt;
    
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
  
  const nextBtn2 = document.createElement('button');
  nextBtn2.className = 'carousel-btn next-btn';
  nextBtn2.textContent = '>';
  
  controls2.appendChild(prevBtn2);
  controls2.appendChild(nextBtn2);
  
  // Create carousel indicators for second carousel
  const indicators2 = document.createElement('div');
  indicators2.className = 'carousel-indicators';
  
  const indicatorElements2 = [];
  
  for (let i = 0; i < imageData2.length; i++) {
    const indicator = document.createElement('span');
    indicator.className = i === 0 ? 'indicator active' : 'indicator';
    indicator.dataset.index = i;
    indicators2.appendChild(indicator);
    indicatorElements2.push(indicator);
  }
  
  // Assemble second carousel
  carousel2Container.appendChild(carousel2);
  carousel2Container.appendChild(controls2);
  carousel2Container.appendChild(indicators2);
  
  // Create row for paragraphs 2 and 3
  const paragraphRow = document.createElement('div');
  paragraphRow.className = 'paragraph-row';
  mainContent.appendChild(paragraphRow);
  
  // Add paragraph 2 (left side)
  const para2Container = document.createElement('div');
  para2Container.className = 'paragraph-container left';
  paragraphRow.appendChild(para2Container);
  
  const para2 = document.createElement('p');
  para2.id = 'what-you-can-get';
  para2.textContent = "Each season, we bring our freshly harvested trees to 5795 Grizzly Bluff Road in Ferndale, California, in the heart of the Ferndale Bottoms. Alongside our trees, we offer handmade fresh Christmas wreaths, crafted with care by Elizabeth Forcier, bringing the fragrance and charm of the season to your home.";
  para2Container.appendChild(para2);
  
  // Add paragraph 3 (right side)
  const para3Container = document.createElement('div');
  para3Container.className = 'paragraph-container right';
  paragraphRow.appendChild(para3Container);
  
  const para3 = document.createElement('p');
  para3.id = 'shop-info';
  para3.textContent = "While selecting your tree, step into our Ornament and Gift shop, housed in the vestibule of a beautifully converted Presbyterian church, where you'll find unique holiday treasures to complement your festivities.";
  para3Container.appendChild(para3);
  
  // Add paragraph 4 (centered at bottom)
  const para4 = document.createElement('p');
  para4.id = 'buy';
  para4.className = 'center-text';
  para4.textContent = "For a tree with history, heart, and Humboldt-grown tradition, visit Roy's Christmas Trees.";
  mainContent.appendChild(para4);
  
  // ========== CAROUSEL FUNCTIONALITY ==========
  
  // First carousel functionality
  let currentIndex1 = 0;
  
  function updateCarousel1() {
    carousel1.style.transform = `translateX(-${currentIndex1 * 100}%)`;
    
    indicatorElements1.forEach((indicator, index) => {
      if (index === currentIndex1) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
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
  
  indicatorElements1.forEach(indicator => {
    indicator.addEventListener('click', () => {
      currentIndex1 = parseInt(indicator.dataset.index);
      updateCarousel1();
    });
  });
  
  // Auto-advance first carousel every 5 seconds
  setInterval(() => {
    currentIndex1 = (currentIndex1 + 1) % carousel1Images.length;
    updateCarousel1();
  }, 5000);
  
  // Second carousel functionality
  let currentIndex2 = 0;
  
  function updateCarousel2() {
    carousel2.style.transform = `translateX(-${currentIndex2 * 100}%)`;
    
    indicatorElements2.forEach((indicator, index) => {
      if (index === currentIndex2) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
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
  
  indicatorElements2.forEach(indicator => {
    indicator.addEventListener('click', () => {
      currentIndex2 = parseInt(indicator.dataset.index);
      updateCarousel2();
    });
  });
  
  // Auto-advance second carousel every 5 seconds, slightly offset from first
  setInterval(() => {
    currentIndex2 = (currentIndex2 + 1) % carousel2Images.length;
    updateCarousel2();
  }, 5500);
  
  // Initialize both carousels
  updateCarousel1();
  updateCarousel2();







// const viewportWidth = window.innerWidth;
// console.log("Viewport width:", viewportWidth);

// // Alternative methods
// const clientWidth = document.documentElement.clientWidth;
// console.log("Client width:", clientWidth);

// const screenWidth = window.screen.width;
// console.log("Screen width:", screenWidth);