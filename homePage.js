document.body.innerHTML += '<header>Roy\'s Christmas Trees</header>';

document.body.innerHTML += '<h3>Address</h3>';
document.body.innerHTML += '<p id="address-text">5795 Grizzly Bluff Road in Ferndale, California</p>';

document.body.innerHTML += '<img src="Ornaments.jpg" id="ornaments">';
document.body.innerHTML += '<img src="WreathWithCandle.jpg" id="wreath-candle">';
document.body.innerHTML += '<img src="Wreath.jpg" id="wreath">';
document.body.innerHTML += '<img src="RoyAtFarm.jpg" id="roy-farm">';
document.body.innerHTML += '<img src="Tree.jpg" id="tree">';


document.body.innerHTML += '<p id="Intro">Nestled in the scenic hills of Honeydew, California, Roy’s Christmas Trees has grown premium Silvertip (Red Fir) trees since 1982. Founded and run by Roy Forcier, our small, family-run tree farm specializes in stump-cultured trees. We also plant tree seedlings ensuring a sustainable and naturally beautiful selection for your holiday celebrations.</p>';
document.body.innerHTML += '<p id="What-You-Can-Get">Each season, we bring our freshly harvested trees to 5795 Grizzly Bluff Road in Ferndale, California, in the heart of the Ferndale Bottoms. Alongside our trees, we offer handmade fresh Christmas wreaths, crafted with care by Elizabeth Forcier, bringing the fragrance and charm of the season to your home.</p>';
document.body.innerHTML += '<p id="What-You-Can-Get">While selecting your tree, step into our Ornament and Gift shop, housed in the vestibule of a beautifully converted Presbyterian church, where you\'ll find unique holiday treasures to complement your festivities.</p>';
document.body.innerHTML += '<p id="buy">For a tree with history, heart, and Humboldt-grown tradition, visit Roy’s Christmas Trees.</p>';

const viewportWidth = window.innerWidth;
console.log("Viewport width:", viewportWidth);

// Alternative methods
const clientWidth = document.documentElement.clientWidth;
console.log("Client width:", clientWidth);

const screenWidth = window.screen.width;
console.log("Screen width:", screenWidth);