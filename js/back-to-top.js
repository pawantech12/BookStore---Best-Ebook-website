// back to top button functionality
let backbtn = document.querySelector(".back-to-top");
const scrollBtnDisplay = function () {
  window.scrollY > 100
    ? backbtn.classList.add("show")
    : backbtn.classList.remove("show");
};
window.addEventListener("scroll", scrollBtnDisplay);

const scrollWindow = function () {  
  if (window.scrollY != 0) {
    setTimeout(function () {
      window.scrollTo(0, window.scrollY - 50);
      scrollWindow();
    }, 10);
  }
};
backbtn.addEventListener("click", scrollWindow);