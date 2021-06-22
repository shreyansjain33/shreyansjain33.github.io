
// hamburger menu animation and top nav extending
const menuBtn = document.querySelector(".button-container");
const collapseNav = document.querySelector(".menu");
menuBtn.addEventListener("click", navMenu);
function navMenu() {
  menuBtn.classList.contains("active")
    ? (menuBtn.classList.remove("active"), collapseNav.classList.remove("open"))
    : (menuBtn.classList.add("active"), collapseNav.classList.add("open"));
}


$(document).ready(function() {
  $('#fullpage').fullpage({
    autoScrolling:true,
    paddingTop: '10vh',
    paddingBottom: '5vh'
  });
});


new Splide('#kb', {
  type : 'loop',
  fixedHeight: '40vh',
  cover: true,
  gap: '5vw',
  focus: 'center',
  padding: {
    right: '30vw',
    left : '30vw',
  },
}).mount();

new Splide('#clients', {
  type : 'loop',
  fixedHeight: '10vh',
  cover: true,
  gap: '5vw',
  focus: 'center',
  perPage: 3,
  padding: {
    right: '4.8vw',
    left : '5vw',
  },
}).mount();

