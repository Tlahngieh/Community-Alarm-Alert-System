// script.js - Community Alarm Alert System
// This script handles community alerts and simple interactions

// Function to simulate alert messages
function triggerAlert(type) {
  let message = "";

  switch (type) {
    case "fire":
      message = "🚨 Fire Alert! Evacuate immediately and contact the fire department!";
      break;
    case "theft":
      message = "⚠️ Theft Alert! Stay indoors and notify security or police!";
      break;
    case "medical":
      message = "🚑 Medical Emergency! Please assist or call emergency services!";
      break;
    default:
      message = "🔔 General Alert! Stay safe and follow community guidelines.";
  }

  alert(message);
}

// Example: automatically show a welcome message
window.onload = function() {
  console.log("Community Alarm Alert System loaded successfully!");
};
