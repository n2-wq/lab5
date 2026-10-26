// geolocation.js - Exercise 2: HTML5 Geolocation

// runs immediately when the script loads, so the <script src> tag
// must come AFTER the <p id="geolocation"> element in the HTML
let x = document.getElementById("geolocation");

// called when the button is clicked
function getGeolocation() {
  if (navigator.geolocation) {
    // pass the callback FUNCTION NAME, not a call (no parentheses):
    // "once you have my position, please run showGeolocation"
    navigator.geolocation.getCurrentPosition(showGeolocation);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

// success callback: runs automatically once the position is available
function showGeolocation(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}
