// change project
const changeProject = () => {
  const projectImg = document.querySelector(".project-img img");
  const projectDetails = document.querySelectorAll(".project-details");

  projectDetails.forEach((project) => {
    project.addEventListener("click", () => {
      projectDetails.forEach((p) => {
        p.classList.remove("active");
      });

      project.classList.add("active");
      projectImg.src = project.getAttribute("data-bg-img");
    });
  });
};

// update the slider
const updateSlider = () => {
  const slides = document.querySelectorAll(".slide");
  const slideButtonsContainer = document.querySelector(".slide-buttons");
  const slidesContainer = document.querySelector(".slides");
  let currentIndex = 0;
  const totalSlides = slides.length;

  // Remove existing buttons
  slideButtonsContainer.innerHTML = "";

  // Create buttons dynamically based on the number of slides
  for (let i = 0; i < totalSlides; i++) {
    const btn = document.createElement("span");
    btn.classList.add("slide-btn");
    if (i === 0) btn.classList.add("active");
    slideButtonsContainer.appendChild(btn);
  }

  const slideButtons = document.querySelectorAll(".slide-btn");

  function updateCarousel() {
    const slideWidth = slides[0].clientWidth;
    const newTransformValue = -currentIndex * slideWidth + "px";
    slidesContainer.style.transform = `translateX(${newTransformValue})`;
    slideButtons.forEach((btn, index) => {
      btn.classList.toggle("active", index === currentIndex);
    });
  }

  slideButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      currentIndex = index;
      updateCarousel();
    });
  });

  window.addEventListener("resize", updateCarousel);
};

document.addEventListener("DOMContentLoaded", updateSlider);

window.addEventListener("DOMContentLoaded", () => {
  updateSlider();

  changeProject();
});

const inputs = document.querySelectorAll(".contact-form .input-group input");

inputs.forEach((input) => {
  // Initial check to see if inputs have values
  if (input.value) {
    input.setAttribute("data-fill", "true");
  }

  // Add event listener for input events to toggle 'filled' class
  input.addEventListener("input", () => {
    if (input.value) {
      input.setAttribute("data-fill", "true");
    } else {
      input.setAttribute("data-fill", "false");
    }
  });
});
