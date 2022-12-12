const modeTracker = { isDarkmode: true, isLightmode: false };
var darkContainer = document.querySelector(".darkContainer");
var lightContainer = document.querySelector(".lightContainer");
var darkSide = document.querySelector(".darkSide");
var lightkSide = document.querySelector(".lightSide");

function switchMode() {
  if (modeTracker.isDarkmode == true) {
    modeTracker.isDarkmode = false;
    modeTracker.isLightmode = true;
    var elements = document.querySelectorAll(".darkmode");
    elements.forEach((element) => {
      element.classList.replace("darkmode", "lightmode");
    });
    darkContainer.style.display = "none";
    lightContainer.style.display = "block";
    return;
  }
  if (modeTracker.isLightmode == true) {
    modeTracker.isLightmode = false;
    modeTracker.isDarkmode = true;
    var elements = document.querySelectorAll(".lightmode");
    elements.forEach((element) => {
      element.classList.replace("lightmode", "darkmode");
    });
    lightContainer.style.display = "none";
    darkContainer.style.display = "block";
    return;
  }
}

let h2s = document.querySelectorAll("h2");
h2s.forEach(function (h2) {
  h2.addEventListener("click", function () {
    switchMode();
  });
  h2.addEventListener("mouseover", function () {
    if (this.parentElement == darkContainer) {
      this.parentElement.classList.add("lightmode");
      darkSide.classList.add("lightmode");
    }
    if (this.parentElement == lightContainer) {
      this.parentElement.classList.add("darkmode");
      lightkSide.classList.add('darkmode');
    }
  });
  h2.addEventListener("mouseout", function () {
    if (this.parentElement == darkContainer) {
      this.parentElement.classList.remove("lightmode");
      darkSide.classList.remove("lightmode");
    }
    if (this.parentElement == lightContainer) {
      this.parentElement.classList.remove("darkmode");
      lightkSide.classList.remove('darkmode');
    }
  });
});
