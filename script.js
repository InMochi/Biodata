document.addEventListener("DOMContentLoaded", function () {

    let projectBoxes = document.querySelectorAll(".project-box");
    projectBoxes.forEach((box) => {
      box.addEventListener("mouseenter", function () {
        box.style.transform = "scale(1.05)";
        box.style.transition = "0.3s";
      });
      box.addEventListener("mouseleave", function () {
        box.style.transform = "scale(1)";
      });
    });
  });
  