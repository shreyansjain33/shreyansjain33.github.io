

// hamburger menu animation and top nav extending
const menuBtn = document.querySelector(".button-container");
const collapseNav = document.querySelector(".menu");
menuBtn.addEventListener("click", navMenu);
function navMenu() {
  menuBtn.classList.contains("active")
    ? (menuBtn.classList.remove("active"), collapseNav.classList.remove("open"))
    : (menuBtn.classList.add("active"), collapseNav.classList.add("open"));
}

// left-side page nav
function clickNav(e) {
  let key = e.target.getAttribute("data-key");

  slides.forEach(slide => {
    if (slide.getAttribute("data-key") === key) {
      e.target.classList.add("selected");
      slide.classList.add("current");
      slide.classList.remove("next");
      slide.classList.remove("prev");
      slide.nextElementSibling != null
        ? (slide.nextElementSibling.classList.add("next"),
          slide.nextElementSibling.classList.remove("current"),
          document
            .getElementById("footerWrapper")
            .classList.remove("last-slide"),
          document.getElementById("arrowIcon").classList.remove("last-slide"),
          document.getElementById("footerNav").classList.remove("last-slide"))
        : (document.getElementById("footerWrapper").classList.add("last-slide"),
          document.getElementById("arrowIcon").classList.add("last-slide"),
          document.getElementById("footerNav").classList.add("last-slide"));

      if (slide.previousElementSibling) {
        slide.previousElementSibling.classList.add("prev");
        slide.previousElementSibling.classList.remove("current");
      }
    } else {
      let slideKey = slide.getAttribute("data-key");

      slideKey > key
        ? (slide.classList.replace("current", "next"),
          slide.classList.replace("prev", "next"))
        : (slide.classList.replace("current", "prev"),
          slide.classList.replace("next", "prev"));

      pageNav.forEach(dot => {
        if (dot.getAttribute("data-key") === slideKey) {
          dot.classList.remove("selected");
        }
      });
    }
  });
}