
// Future JavaScript interactions can be added here
console.log("Godhani Paints website loaded!");

/* ------------CSS for Color Pallete---------- */

function setWallColor(color) {
  const overlay = document.getElementById('colorOverlay');
  overlay.style.background = color;
}

window.addEventListener('load', function () {
    const form = document.querySelector('form');

    // Check if redirected from a form submission using URL hash or _next
    if (window.location.href.includes('#contact')) {
      form.reset(); // Clear the form
    }
});
