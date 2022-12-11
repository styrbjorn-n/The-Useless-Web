const modeTracker = { isDarkmode: true, isLightmode: false };

function switchMode() {
  var darkContainer = document.querySelector(".darkContainer");
  var lightContainer = document.querySelector(".lightContainer");

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

const h2s = document.querySelectorAll('.h2');
h2s.forEach((h2)=> {
  h2.addEventListener('click', switchMode());
});
