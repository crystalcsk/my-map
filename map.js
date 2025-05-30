// Wait for the DOM to be ready (optional but good practice)
document.addEventListener('DOMContentLoaded', function() {

    // 1. Initialize the map and set its view
    // L.map('map') creates a map instance linked to the div with id="map"
    const map = L.map('map').setView([45.50787274135117, -73.5602662078666], 17); // Chinatown Coordinates [lat, lng], Zoom level

     var photoIcon = L.icon({
    iconUrl: 'https://static.thenounproject.com/png/3677338-200.png',

    iconSize:     [30, 30], // size of the icon
});
  // Add a marker for grocers
    const grocerCoords = [45.508233198262246, -73.55985316249082];
    const grocerMarker = L.marker((grocerCoords), {icon: photoIcon}).addTo(map);

    // Add a popup to the marker
grocerMarker.bindPopup("<h1>Sang Yuen Grocer, 1966</h1><img class='popupimage' src='https://live.staticflickr.com/8436/7797112804_fa1f0080aa_c.jpg' alt='person walks down street' width='50%' height='50%'/> ");

    // Add a marker for pagoda
    const pagodaCoords = [45.50703955171443, -73.56086608418427];
    const pagodaMarker = L.marker((pagodaCoords), {icon: photoIcon}).addTo(map);

    // Add a popup to the marker
pagodaMarker.bindPopup("<h1>Pagoda Park</h1><p>As a child, I went with my family to eat at a restaurant that no longer exists today—Hun Dao.Before dinner, my brother and I would sometimes go into the stores on Saint-Laurent, marvelling at the toys we found. Unfortunately, new construction resulted in the loss of important places for the community, such as residences, schools, churches, and the pagoda.<img class='popupimage' src='https://jiafoundationmtl.org/wp-content/uploads/Marion-Resized.jpg' alt='person beside pagoda' width='50%' height='50%'/></p> ");

    // Add a marker for Bethany
    const bethanyCoords = [45.50787274135117, -73.5602662078666];
    const bethanyMarker = L.marker((bethanyCoords), {icon: photoIcon}).addTo(map);

    // Add a popup to the marker
bethanyMarker.bindPopup ("<img src='https://jiafoundationmtl.org/wp-content/uploads/Bethany-Resized.jpg' alt='person in stairwell' width='50%' height='50%'/><iframe width='200' height='112' src='https://www.youtube.com/embed/VSZfxbolSjA?start=62' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe><h1>1075 Clark</h1><p>I spent a lot of time at my grandparents’ place. That meant climbing the stairs up to 1075 Clark, a place my Gong Gong had rented in anticipation of his wife and kids joining him, which they eventually did in 1965. How special it must have been for him to spend time with a grandchild, having missed out on his own kids’ childhoods. In fact, for decades, children were a rarity in Chinatowns across North America.</p>", {
    maxHeight: 300
});

    // add visual overlay to map
var Thunderforest_Pioneer = L.tileLayer('https://tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey=e59862f21e9448b792ca2dc6ee9a4520', {
	apikey: 'e59862f21e9448b792ca2dc6ee9a4520',
	maxZoom: 22
});

// Add the tile layer to our map instance
 L.tileLayer.provider('Thunderforest.Pioneer', {apikey: 'e59862f21e9448b792ca2dc6ee9a4520'}).addTo(map);

 // Event handler for button click to zoom map
$('#showNewMap').on('click', function() {
// Code inside this function runs when the button is clicked
// add image over certain coordinates 
var imageUrl = 'https://jiafoundationmtl.org/wp-content/uploads/Chinatown-New-boundaries-Resized-1024x461.jpg',
    imageBounds = [[45.50787274135117, -73.5602662078666], [45.50468652200892, -73.55593175841695]];
L.imageOverlay(imageUrl, imageBounds).addTo(map);

});

});

// End DOMContentLoaded listener