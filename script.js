// Animate Image on Button Click
const animateBtn = document.getElementById("animateBtn");
const animatedImage = document.getElementById("animatedImage");

animateBtn.addEventListener("click", () => {
  animatedImage.classList.add("bouncing");

  // Remove the animation class after animation ends
  setTimeout(() => {
    animatedImage.classList.remove("bouncing");
  }, 600);
});

// Theme preference using localStorage
const themeSelect = document.getElementById("themeSelect");
const body = document.body;

// Load theme from localStorage on load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("user-theme") || "light";
  body.classList.add(savedTheme);
  themeSelect.value = savedTheme;
});

// Change and save theme
themeSelect.addEventListener("change", (e) => {
  const newTheme = e.target.value;

  // Remove old theme class
  body.classList.remove("light", "dark");
  // Add new theme class
  body.classList.add(newTheme);

  // Save preference
  localStorage.setItem("user-theme", newTheme);
});
