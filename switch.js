const modeTracker = { isDarkmode: true, isLightmode: false };

function switchMode() {
  if (modeTracker.isDarkmode == true) {
    modeTracker.isDarkmode = false;
    modeTracker.isLightmode = true;
    var elements = document.querySelectorAll(".darkmode");
    elements.forEach((element) => {
      element.classList.replace("darkmode", "lightmode");
    });
    var darkText = document.querySelector(".darkContainer");
    darkText.style.display = "none";
    var lightText = document.querySelector(".lightContainer");
    lightText.style.display = "block";
    return;
  }
  if (modeTracker.isLightmode == true) {
    modeTracker.isLightmode = false;
    modeTracker.isDarkmode = true;
    var elements = document.querySelectorAll(".lightmode");
    elements.forEach((element) => {
      element.classList.replace("lightmode", "darkmode");
    });
    var lightText = document.querySelector(".lightContainer");
    lightText.style.display = "none";
    var darkText = document.querySelector(".darkContainer");
    darkText.style.display = "block";
    return;
  }
}
