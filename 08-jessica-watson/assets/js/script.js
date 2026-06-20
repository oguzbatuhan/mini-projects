const hamburger = document.querySelector(".hamburger");
const navRight = document.querySelector(".nav-right");
const overlay = document.querySelector(".overlay");

// Hamburger menü açma kapama
hamburger.addEventListener("click", () => {
  navRight.classList.toggle("active");
  overlay.classList.remove("d-none");
  overlay.classList.add("d-block");
});

overlay.addEventListener("click", () => {
  navRight.classList.remove("active");
  overlay.classList.remove("d-block");
  overlay.classList.add("d-none");
});
