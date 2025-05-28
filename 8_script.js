// script.js
console.log('Script loaded!');

// Change heading HTML
$('h1').html("jQuery Makes It <em>Easier</em>!");

// Add initial text to output area
$('#outputArea').text("Ready for clicks...");

// Set a single CSS property
$('h1').css('color', 'green');

// Set multiple CSS properties using an object
$('#myButton').css({
  'background-color': 'lightblue',
  'padding': '10px 15px',
  'border': 'none',
  'border-radius': '5px', // Note: CSS property names with hyphens are quoted
  'cursor': 'pointer'     // Make the mouse cursor a pointer
});
// Event handler for the button click
$('#myButton').on('click', function() {
  // Code inside this function runs when the button is clicked

  console.log("Button was clicked!"); // Log to console
  $('#outputArea').html("<strong>Button clicked!</strong> Timestamp: " + Date.now()); // Update the output div

  // Example: Toggle the visibility of the first paragraph on each click
  $('p:first').toggle(); // If hidden, show; if shown, hide.

  // Example: Toggle a CSS class on the heading
  $('h1').toggleClass('active'); // Assumes an .active class exists in styles.css
});

// Add a hover effect (using shorthand methods)
$('#myButton').hover(
  function() {
    // Function runs when mouse enters the button
    $(this).css('background-color', 'darkblue'); // 'this' refers to the button being hovered
  },
  function() {
    // Function runs when mouse leaves the button
    $(this).css('background-color', 'cornflowerblue'); // Restore original color
  }
);

// Add an example .active class to styles.css:
/*
.active {
  text-shadow: 2px 2px 5px grey;
}
*/