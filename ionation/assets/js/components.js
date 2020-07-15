
// hamburger menu animation and top nav extending
const menuBtn = document.querySelector(".button-container");
const collapseNav = document.querySelector(".menu");
menuBtn.addEventListener("click", navMenu);
function navMenu() {
  menuBtn.classList.contains("active")
    ? (menuBtn.classList.remove("active"), collapseNav.classList.remove("open"))
    : (menuBtn.classList.add("active"), collapseNav.classList.add("open"));
}
